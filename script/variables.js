// VARIABLES -----------------------------------------------------------------------------------------------------------------------
// Factors
var anim_speed_factor = 1;
var action_area_corner_offset_factor = 0.1;
var action_area_base_size_factor = 3/2;

// Colors

var palette = {
  blue_yellow: {
    color_1: '#3C3C3C',
    color_2: '#238482',
    color_3: '#3BDB83',
    color_4: '#F4C700',
  },
  blue: {
    color_1: '#2F2F2F',
    color_2: '#09494D',
    color_3: '#337680',
    color_4: '#5C9199',
  },
  grayscale: {
    color_1: '#333333',
    color_2: '#4D4D4D',
    color_3: '#666666',
    color_4: '#808080',
  },
<<<<<<< HEAD
}

var pallet = 'blue'

//testing
=======
<<<<<<< HEAD
}

var pallet = 'blue'

//er is geen kloot veranderd

=======
<<<<<<< HEAD
}

var pallet = 'blue'
=======
  sunset: {
    color_1: '#2B2A27',
    color_2: '#921B16',
    color_3: '#D6701C',
    color_4: '#D69723',
  },
  tuscanpool: { //color4 is toch ni da
    color_1: '#262625',
    color_2: '#203D35',
    color_3: '#00B99E',
    color_4: '#FCC885',
  },
}

var pallet = 'sunset'
>>>>>>> 8334efaf7acc2abd38156ff07381e79d09287ba8
>>>>>>> 074f6747b1568b94d0c577edf518e45939d92354
>>>>>>> 77b4f4b941d820fc5ccbfd05c4ccedecc5d523d6

var color_1 = palette[pallet].color_1;
var color_2 = palette[pallet].color_2;
var color_3 = palette[pallet].color_3;
var color_4 = palette[pallet].color_4;

var color_1_dim = '#BFBFBF';
var color_back = "#FFF";

// Window width variables
var window_width, window_height, min_window_size;

// Responsive
var page = false;
var screen_large, screen_medium , screen_small;
var width_large, width_medium , width_small;
var screen_large_size = 1026; //iPad pro = 1024
var screen_medium_size = 770; //iPad = 768
var screen_small_size = 416; //iPhone plus = 414

// Reference box variables
var ref_box_size;
var ref_box_offset_top_center, ref_box_offset_left_center;

// BoxProximity & mousemove variables
var mouse_top, mouse_left, touch

var box_corner_offset, proximity_margin;
var box1_proximity, box2_proximity, box3_proximity, box4_proximity;
var box1_proximity_size, box2_proximity_size, box3_proximity_size, box4_proximity_size;
BoxProximity_1_enable = true;
BoxProximity_2_enable = true;
BoxProximity_3_enable = true;
BoxProximity_4_enable = true;

// Square/Box variables
var box1_size, box2_size, box3_size, box4_size;
var hover_size;
var box_title_margin, box_title_font_size;
var box1_offset_top_center, box1_offset_left_center;
var box2_offset_top_center, box2_offset_left_center;
var box3_offset_top_center, box3_offset_left_center;
var box4_offset_top_center, box4_offset_left_center;
var BoxProximity_1_enable, BoxProximity_2_enable, BoxProximity_3_enable, BoxProximity_4_enable;
var MS_animation_speed

// Logo variables
var logo_size, logo_ref_center_tl;

// Header
var header_height = 50;

// User agent
var UserAgent;

// Objects
var HL = {}; // header logo
