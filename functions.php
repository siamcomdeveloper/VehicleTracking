<?php
/**
 * Collect functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 *
 * @package WordPress
 * @subpackage Collect
 * @since Collect 1.0
 */

function custom_button_example($wp_admin_bar){
	$iconurl1 = 'http://www.groupmaker.co.th/wordpress/wp-content/themes/collect/images/language/12.png';
	$iconspan = '<span style="float:left; width:20px !important; height:20px !important; background-image:url(\''.$iconurl1.'\');"></span>';
	$title = __( 'Thai' );

	$args = array(
		'id' => 'thai-button',
		'title' => $iconspan.$title,//'Custom Button',
		'href' => 'http://www.groupmaker.co.th/wordpress/wp-content/themes/collect/js/PHPfunctions.php?language=thai',
		'meta' => array(
			'target'   => '_self',
            'title'    => __( 'Hello', 'some-textdomain' ),
            //'html'     => '<p>Hello</p>',
            'class'    => 'wpse--item',
            'rel'      => 'friend',
            'onclick'  => "alert('Hello');",
            'tabindex' => PHP_INT_MAX,
		)
	);
	$wp_admin_bar->add_node($args);

	$iconurl2 = 'http://www.groupmaker.co.th/wordpress/wp-content/themes/collect/images/language/32.png';
	$iconspan = '<span class="custom-icon" style="float:left; width:20px !important; height:20px !important; background-image:url(\''.$iconurl2.'\');"></span>';
	$title = __( 'Eng', 'some-textdomain' );

	$args = array(
		'id' => 'eng-button',
		'title' => $iconspan.$title,//'Custom Button',
		'href' => 'http://www.groupmaker.co.th/wordpress/wp-content/themes/collect/js/PHPfunctions.php?language=eng',
		'meta' => array(
			'class' => 'custom-button-class'
		)
	);
	$wp_admin_bar->add_node($args);
}

add_action('admin_bar_menu', 'custom_button_example', 0);

// Change default role names
function wp_change_role_name() {
    global $wp_roles;
    if ( ! isset( $wp_roles ) )
        $wp_roles = new WP_Roles();

	$wp_roles->roles['administrator']['name'] = 'Root';
    $wp_roles->role_names['administrator'] = 'Root';  

    $wp_roles->roles['editor']['name'] = 'Vender';
    $wp_roles->role_names['editor'] = 'Vender';       
	
	$wp_roles->roles['author']['name'] = 'Resaler';
    $wp_roles->role_names['author'] = 'Resaler';   
	
	$wp_roles->roles['contributor']['name'] = 'SuperUser';
    $wp_roles->role_names['contributor'] = 'SuperUser';

	$wp_roles->roles['subscriber']['name'] = 'User';
    $wp_roles->role_names['subscriber'] = 'User';
}
add_action('init', 'wp_change_role_name');

function wp_get_allowed_roles( $user ) {
    $allowed = array();

    if ( in_array( 'administrator', $user->roles ) ) { // Admin can edit all roles
        $allowed = array_keys( $GLOBALS['wp_roles']->roles );
    } 
	elseif ( in_array( 'editor', $user->roles ) ) {
        $allowed[] = 'author';
		$allowed[] = 'contributor';
        $allowed[] = 'subscriber';
    }
	elseif ( in_array( 'author', $user->roles ) ) {
		$allowed[] = 'contributor';
        $allowed[] = 'subscriber';
    }
	elseif ( in_array( 'contributor', $user->roles ) ) {
        $allowed[] = 'subscriber';
    }

    return $allowed;
}

function wp_editable_roles( $roles ) {
    if ( $user = wp_get_current_user() ) {
        $allowed = wp_get_allowed_roles( $user );

        foreach ( $roles as $role => $caps ) {
            if ( ! in_array( $role, $allowed ) )
                unset( $roles[ $role ] );
        }
    }

    return $roles;
}

add_filter( 'editable_roles', 'wp_editable_roles' );

function wp_map_meta_cap( $caps, $cap, $user_ID, $args ) {
    if ( ( $cap === 'edit_user' || $cap === 'delete_user' ) && $args ) {
        $the_user = get_userdata( $user_ID ); // The user performing the task
        $user     = get_userdata( $args[0] ); // The user being edited/deleted

        if ( $the_user && $user && $the_user->ID != $user->ID ) {// User can always edit self
            $allowed = wp_get_allowed_roles( $the_user );

            if ( array_diff( $user->roles, $allowed ) ) {
                // Target user has roles outside of our limits
                $caps[] = 'not_allowed';
            }
        }
    }

    return $caps;
}

add_filter( 'map_meta_cap', 'wp_map_meta_cap', 10, 4 );


/** Hide Administrator From User List **/
function isa_pre_user_query( $user_search ) {
	global $current_user;
	$username = $current_user->user_login;
	
	if( current_user_can( 'editor' ) && !current_user_can( 'administrator' )) { // Is Not Administrator - Remove Administrator

        global $wpdb;

        $user_search->query_where = str_replace(
            'WHERE 1=1', 
            "WHERE 1=1 AND {$wpdb->users}.user_url LIKE '%/$username/%' AND {$wpdb->users}.ID IN (
              SELECT {$wpdb->usermeta}.user_id FROM $wpdb->usermeta 
              WHERE {$wpdb->usermeta}.meta_key = '{$wpdb->prefix}capabilities'
              AND {$wpdb->usermeta}.meta_value NOT LIKE '%editor%' )", 
            $user_search->query_where
        );
    }
	else if (current_user_can( 'author' ) && !current_user_can( 'administrator' )) { // Is Not Administrator - Remove Administrator

        global $wpdb;

        $user_search->query_where = str_replace(
            'WHERE 1=1', 
            "WHERE 1=1 AND {$wpdb->users}.user_url LIKE '%/$username/%' AND {$wpdb->users}.ID IN (
              SELECT {$wpdb->usermeta}.user_id FROM $wpdb->usermeta 
              WHERE {$wpdb->usermeta}.meta_key = '{$wpdb->prefix}capabilities'
              AND {$wpdb->usermeta}.meta_value NOT LIKE '%author%' )", 
            $user_search->query_where
        );
    }
	else if (current_user_can( 'contributor' ) && !current_user_can( 'administrator' )) { // Is Not Administrator - Remove Administrator

        global $wpdb;

        $user_search->query_where = str_replace(
            'WHERE 1=1', 
            "WHERE 1=1 AND {$wpdb->users}.user_url LIKE '%/$username/%' AND {$wpdb->users}.ID IN (
              SELECT {$wpdb->usermeta}.user_id FROM $wpdb->usermeta 
              WHERE {$wpdb->usermeta}.meta_key = '{$wpdb->prefix}capabilities'
              AND {$wpdb->usermeta}.meta_value NOT LIKE '%contributor%' )", 
            $user_search->query_where
        );
    }
}

add_action( 'pre_user_query', 'isa_pre_user_query' );



function add_admin_bar() {
		show_admin_bar(true);
}

add_action('after_setup_theme', 'add_admin_bar');


function heycodetech_remove_sub_sub_posts_filter() {
 global $current_user;
 if($current_user -> roles[0] != 'administrator'){
echo '
/*#posts-filter,*/
<style> ul.subsubsub .all,
ul.subsubsub .contributor,
ul.subsubsub .author,
ul.subsubsub .subscriber,
ul.subsubsub .editor,
.view-switch,
.tablenav ,
.row-actions .editinline,
.check-column
* {display:none;}
</style>';
}
}
add_action('admin_head', 'heycodetech_remove_sub_sub_posts_filter');

// enqueue script
function my_scripts_method() {

wp_enqueue_script(
		'highcharts',
		get_stylesheet_directory_uri() . '/js/Highcharts/code/highcharts.src.js',
		array('jquery')
		);

wp_enqueue_script(
		'highcharts-more',
		get_stylesheet_directory_uri() . '/js/Highcharts/code/highcharts-more.js',
		array('jquery')
		);

wp_enqueue_script(
		'solid-gauge',
		get_stylesheet_directory_uri() . '/js/Highcharts/code/modules/solid-gauge.js',
		array('jquery')
		);

wp_enqueue_script(
		'Highcharts-jquery',
		get_stylesheet_directory_uri() . '/js/Highcharts/api/js/jquery-1.11.3.min.js',
		array('jquery')
		);

wp_enqueue_script(
		'highchartshow',
		get_stylesheet_directory_uri() . '/js/highchartshow.js',
		array('jquery')
		);

wp_enqueue_script(
		'functionscript',
		get_stylesheet_directory_uri() . '/js/functionscript.js',
		array('jquery')
		);

		wp_enqueue_style( 'font-awesome', COLLECT_THEME_URL .'/css/tablestyle.css', false, '4.6.1', 'all' );
}

add_action('wp_enqueue_scripts', 'my_scripts_method');

// Defining constants
$collect_theme_data = wp_get_theme( 'collect' );
define( 'COLLECT_THEME_URL', get_template_directory_uri() );
define( 'COLLECT_THEME_TEMPLATE', get_template_directory() );
define( 'COLLECT_THEME_VERSION', trim( $collect_theme_data->Version ) );
define( 'COLLECT_THEME_NAME', $collect_theme_data->Name );
define( 'ABC_FEATURED_CONTENT', true );
define( 'ABC_PREMIUM_HEADER_IMAGE', true );

if ( ! isset( $content_width ) ) {
	$content_width = 1000;
}

foreach ( glob( COLLECT_THEME_TEMPLATE . '/inc/*' ) as $filename ) {
	include $filename;
}

add_action( 'after_setup_theme', 'collect_setup' );
if ( ! function_exists( 'collect_setup' ) ) {
	function collect_setup() {
		load_theme_textdomain( 'collect', COLLECT_THEME_TEMPLATE . '/languages' );

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'html5', array(
			'comment-list',
			'comment-form',
			'search-form',
			'gallery',
			'caption'
		) );
		if ( function_exists( 'abc_premium_features' ) ) {
			add_theme_support( 'custom-background', apply_filters( 'collect_custom_background_args', array(
				'default-color' => '000000',
				'wp-head-callback' => 'collect_custom_background_callback',
			) ) );
		}
		add_theme_support( 'custom-logo' );

		add_editor_style( array( 'css/admin/editor-style.css', '/css/font-awesome.css', collect_fonts_url() ) );

		register_nav_menu( 'primary', __( 'Primary Menu', 'collect' ) );

		add_image_size( 'collect-square', 660, 660, true );
		add_image_size( 'collect-wide', 660, 320, true );
		add_image_size( 'collect-tall', 640, 1320, true );

		add_filter( 'use_default_gallery_style', '__return_false' );
	}
}

if ( ! function_exists( 'collect_custom_background_callback' ) ) {
	function collect_custom_background_callback() {
		$color = get_background_color();

		if ( $color === get_theme_support( 'custom-background', 'default-color' ) ) {
			$color = false;
		}

		if ( ! $color ) {
			return;
		}

		$style = $color ? "background-color: #$color;" : '';
		?>
	<style type="text/css" id="custom-background-css">
		#sidebar { <?php echo trim( $style ); ?> }
	</style>
		<?php
	}
}

add_action( 'wp_enqueue_scripts', 'collect_enqueue' );
if ( ! function_exists( 'collect_enqueue' ) ) {
	function collect_enqueue() {
		wp_enqueue_script( 'theme', COLLECT_THEME_URL .'/js/theme.js', array( 'jquery', 'masonry' ), '', true );

		wp_enqueue_style( 'collect-stylesheet', get_stylesheet_uri() );
		wp_enqueue_style( 'collect-google-fonts', collect_fonts_url(), array(), null );
		wp_enqueue_style( 'font-awesome', COLLECT_THEME_URL .'/css/font-awesome.css', false, '4.6.1', 'all' );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		if ( is_single() ) {
			$previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '', true );
			$next     = get_adjacent_post( false, '', false );
			$css      = '';

			if ( is_attachment() && 'attachment' == $previous->post_type ) {
				return;
			}

			if ( $previous &&  has_post_thumbnail( $previous->ID ) ) {
				$prevthumb = wp_get_attachment_image_src( get_post_thumbnail_id( $previous->ID ), 'post-thumbnail' );
				$css .= '
					.post-navigation .nav-previous { background-image: url(' . esc_url( $prevthumb[0] ) . '); }
					.post-navigation .nav-previous .post-title, .post-navigation .nav-previous a:hover .post-title, .post-navigation .nav-previous .meta-nav { color: #fff; }
					.post-navigation .nav-previous a:before { background-color: rgba(0, 0, 0, 0.4); }
				';
			}

			if ( $next && has_post_thumbnail( $next->ID ) ) {
				$nextthumb = wp_get_attachment_image_src( get_post_thumbnail_id( $next->ID ), 'post-thumbnail' );
				$css .= '
					.post-navigation .nav-next { background-image: url(' . esc_url( $nextthumb[0] ) . '); border-top: 0; }
					.post-navigation .nav-next .post-title, .post-navigation .nav-next a:hover .post-title, .post-navigation .nav-next .meta-nav { color: #fff; }
					.post-navigation .nav-next a:before { background-color: rgba(0, 0, 0, 0.4); }
				';
			}

			wp_add_inline_style( 'collect-stylesheet', $css );
		}
	}
}

if ( ! function_exists( 'collect_fonts_url' ) ) {
	function collect_fonts_url() {
		$fonts     = array();
		$subsets   = 'latin,latin-ext';

		/*
		 * Translators: If there are characters in your language that are not supported
		 * by Roboto, translate this to 'off'. Do not translate into your own language.
		 */
		if ( 'off' !== _x( 'on', 'Ubuntu font: on or off', 'collect' ) ) {
			$fonts[] = 'Ubuntu:300,400,400italic,500,700,700italic';
		}

		/*
		 * Translators: To add an additional character subset specific to your language,
		 * translate this to 'greek', 'cyrillic', 'devanagari' or 'vietnamese'. Do not translate into your own language.
		 */
		$subset = _x( 'no-subset', 'Add new subset (greek, cyrillic, devanagari, vietnamese)', 'collect' );

		if ( 'cyrillic' == $subset ) {
			$subsets .= ',cyrillic,cyrillic-ext';
		} elseif ( 'greek' == $subset ) {
			$subsets .= ',greek,greek-ext';
		} elseif ( 'devanagari' == $subset ) {
			$subsets .= ',devanagari';
		} elseif ( 'vietnamese' == $subset ) {
			$subsets .= ',vietnamese';
		}

		return ( $fonts ) ? add_query_arg( array(
			'family' => urlencode( implode( '|', $fonts ) ),
			'subset' => urlencode( $subsets ),
		), 'https://fonts.googleapis.com/css' ) : '';
	}
}

add_action( 'widgets_init', 'collect_widgets_init' );
if ( ! function_exists( 'collect_widgets_init' ) ) {
	function collect_widgets_init() {
		register_sidebar( array(
			'name' => __( 'Sidebar', 'collect' ),
			'id' => 'sidebar',
			'description' => __( 'This is a fixed section that appears to the left of the main content on every page.', 'collect' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget' => '</aside>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => __( 'Hidden Sidebar', 'collect' ),
			'id' => 'hidden-sidebar',
			'description' => __( 'This is a hidden section that will appear in the left sidebar when the menu icon is clicked.', 'collect' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget' => '</aside>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
	}
}