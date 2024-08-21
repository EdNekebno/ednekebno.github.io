lua.luaGenerator.forBlock['riv_clear'] = function (block, generator) {
    const value_color = generator.valueToCode(block, 'color', 0);
    var ret = "L.riv_clear(" + value_color + ")\n";
    return ret;
};

lua.luaGenerator.forBlock['riv_present'] = function (block, generator) {
    const code = 'L.riv_present()';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_draw_text'] = function (block, generator) {
    const value_text = generator.valueToCode(block, 'text', 0);
    const value_spritesheet = generator.valueToCode(block, 'spritesheet', 0);
    const value_anchor = generator.valueToCode(block, 'anchor', 0);
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_size = generator.valueToCode(block, 'size', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = `L.riv_draw_text(` + value_text + `,` + value_spritesheet + `,` + value_anchor + `, ` + value_x + `, ` + value_y + `, ` + value_size + `, ` + value_color + `)\n`;
    return code;
}

lua.luaGenerator.forBlock['riv_load_palette'] = function (block, generator) {
    const text_file = block.getFieldValue('file');
    const value_filename = generator.valueToCode(block, 'filename', 0);
    const number_startcol = block.getFieldValue('startcol');
    const value_start = generator.valueToCode(block, 'start', 0);
    const code = 'L.riv_load_palette("' + text_file + '", ' + number_startcol + ')\n';
    return [code, 0];
}

String.prototype.hexEncode = function () {
    var hex, i;

    var result = "";
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("0" + hex).slice(-2);
    }

    return result
}

lua.luaGenerator.forBlock['riv_make_image'] = function (block, generator) {
    const text_file = block.getFieldValue('file');
    const number_colorkey = block.getFieldValue('colorkey');
    //const code = 'L.riv_make_image("' + text_file + '", ' + number_colorkey + ')\n';
    console.log("_--" + text_file + "--_");
    var i = 0;
    for (i = 0; i < images.length; i++) {
        if (images[i][0] == text_file) {
            break;
        }
    }
    var count = 0;
    for (var p in images[i][3]) {
        images[i][3].hasOwnProperty(p) && count++;
    }
    hex = "";
    for (var h = 0; h < count; h++) {
        hx = images[i][3][h].toString(16);
        hex += ("0" + hx).slice(-2);
    }
    code = "new_image(" + images[i][1] + ", " + images[i][2] + ", " + number_colorkey + ", '" + hex + "')\n";
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_draw_image_rect'] = function (block, generator) {
    const value_image_id = generator.valueToCode(block, 'image_id', 0);
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_width = generator.valueToCode(block, 'width', 0);
    const value_height = generator.valueToCode(block, 'height', 0);
    const value_sx = generator.valueToCode(block, 'sx', 0);
    const value_sy = generator.valueToCode(block, 'sy', 0);
    const value_mw = generator.valueToCode(block, 'mw', 0);
    const value_mh = generator.valueToCode(block, 'mh', 0);
    const code = 'L.riv_draw_image_rect(' + value_image_id + ',' + value_x + ',' + value_y + ',' + value_width + ',' + value_height + ',' + value_sx + ',' + value_sy + ',' + value_mw + ',' + value_mh + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_destroy_image'] = function (block, generator) {
    // TODO: change 0 to the correct operator precedence strength
    const value_image_id = generator.valueToCode(block, 'image_id', 0);

    // TODO: Assemble lua into the code variable.
    const code = 'L.riv_destroy_image(' + value_image_id + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_make_spritesheet'] = function (block, generator) {
    const value_image_id = generator.valueToCode(block, 'image_id', 0);
    const value_sprite_width = generator.valueToCode(block, 'sprite_width', 0);
    const value_sprite_height = generator.valueToCode(block, 'sprite_height', 0);
    const code = 'L.riv_make_spritesheet(' + value_image_id + ', ' + value_sprite_width + ', ' + value_sprite_height + ')\n';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_draw_sprite'] = function (block, generator) {
    const value_frame_number = generator.valueToCode(block, 'frame_number', 0);
    const value_spritesheet_id = generator.valueToCode(block, 'spritesheet_id', 0);
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_nw = generator.valueToCode(block, 'nw', 0);
    const value_nh = generator.valueToCode(block, 'nh', 0);
    const value_mw = generator.valueToCode(block, 'mw', 0);
    const value_mh = generator.valueToCode(block, 'mh', 0);
    const code = 'L.riv_draw_sprite(' + value_frame_number + ', ' + value_spritesheet_id + ', ' + value_x + ', ' + value_y + ', ' + value_nw + ', ' + value_nh + ', ' + value_mw + ', ' +value_mh + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_destroy_spritesheet'] = function (block, generator) {
    const value_spritesheet_id = generator.valueToCode(block, 'spritesheet_id', 0);
    const code = 'L.riv_destroy_spritesheet(' + value_spritesheet_id + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_point'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_point(' + value_x + ', ' + value_y + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_line'] = function (block, generator) {
    const value_x0 = generator.valueToCode(block, 'x0', 0);
    const value_y0 = generator.valueToCode(block, 'y0', 0);
    const value_x1 = generator.valueToCode(block, 'x1', 0);
    const value_y1 = generator.valueToCode(block, 'y1', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_line(' + value_x0 + ', ' + value_y0 + ', ' + value_x1 + ', ' + value_y1 + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_rect_fill'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_w = generator.valueToCode(block, 'w', 0);
    const value_h = generator.valueToCode(block, 'h', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_rect_fill(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_rect_line'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_w = generator.valueToCode(block, 'w', 0);
    const value_h = generator.valueToCode(block, 'h', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_rect_line(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_quad_fill'] = function (block, generator) {
    const value_x0 = generator.valueToCode(block, 'x0', 0);
    const value_y0 = generator.valueToCode(block, 'y0', 0);
    const value_x1 = generator.valueToCode(block, 'x1', 0);
    const value_y1 = generator.valueToCode(block, 'y1', 0);
    const value_x2 = generator.valueToCode(block, 'x2', 0);
    const value_y2 = generator.valueToCode(block, 'y2', 0);
    const value_x3 = generator.valueToCode(block, 'x3', 0);
    const value_y3 = generator.valueToCode(block, 'y3', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_quad_fill(' + value_x0 + ', ' + value_y0 + ', ' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ', ' + value_x3 + ', ' + value_y3 + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_quad_line'] = function (block, generator) {
    const value_x0 = generator.valueToCode(block, 'x0', 0);
    const value_y0 = generator.valueToCode(block, 'y0', 0);
    const value_x1 = generator.valueToCode(block, 'x1', 0);
    const value_y1 = generator.valueToCode(block, 'y1', 0);
    const value_x2 = generator.valueToCode(block, 'x2', 0);
    const value_y2 = generator.valueToCode(block, 'y2', 0);
    const value_x3 = generator.valueToCode(block, 'x3', 0);
    const value_y3 = generator.valueToCode(block, 'y3', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_quad_line(' + value_x0 + ', ' + value_y0 + ', ' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ', ' + value_x3 + ', ' + value_y3 + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_box_fill'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_w = generator.valueToCode(block, 'w', 0);
    const value_h = generator.valueToCode(block, 'h', 0);
    const value_rotation = generator.valueToCode(block, 'rotation', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_box_fill(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h + ', ' + value_rotation + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_box_line'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_w = generator.valueToCode(block, 'w', 0);
    const value_h = generator.valueToCode(block, 'h', 0);
    const value_rotation = generator.valueToCode(block, 'rotation', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_box_line(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h + ', ' + value_rotation + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_circle_fill'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_diameter = generator.valueToCode(block, 'diameter', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_circle_fill(' + value_x + ', ' + value_y + ', ' + value_diameter + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_circle_line'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_diameter = generator.valueToCode(block, 'diameter', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_circle_line(' + value_x + ', ' + value_y + ', ' + value_diameter + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_ellipse_fill'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_w = generator.valueToCode(block, 'w', 0);
    const value_h = generator.valueToCode(block, 'h', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_ellipse_fill(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_ellipse_line'] = function (block, generator) {
    const value_x = generator.valueToCode(block, 'x', 0);
    const value_y = generator.valueToCode(block, 'y', 0);
    const value_w = generator.valueToCode(block, 'w', 0);
    const value_h = generator.valueToCode(block, 'h', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_ellipse_line(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_triangle_fill'] = function (block, generator) {
    const value_x0 = generator.valueToCode(block, 'x0', 0);
    const value_y0 = generator.valueToCode(block, 'y0', 0);
    const value_x1 = generator.valueToCode(block, 'x1', 0);
    const value_y1 = generator.valueToCode(block, 'y1', 0);
    const value_x2 = generator.valueToCode(block, 'x2', 0);
    const value_y2 = generator.valueToCode(block, 'y2', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_triangle_fill(' + value_x0 + ', ' + value_y0 + ', ' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_draw_triangle_line'] = function (block, generator) {
    const value_x0 = generator.valueToCode(block, 'x0', 0);
    const value_y0 = generator.valueToCode(block, 'y0', 0);
    const value_x1 = generator.valueToCode(block, 'x1', 0);
    const value_y1 = generator.valueToCode(block, 'y1', 0);
    const value_x2 = generator.valueToCode(block, 'x2', 0);
    const value_y2 = generator.valueToCode(block, 'y2', 0);
    const value_color = generator.valueToCode(block, 'color', 0);
    const code = 'L.riv_draw_triangle_line(' + value_x0 + ', ' + value_y0 + ', ' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ', ' + value_color + ')\n';
    return code;
}

lua.luaGenerator.forBlock['gamepad_up_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_UP].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_up_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_UP].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_up_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_UP].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_up_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_UP].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_down_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_DOWN].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_down_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_DOWN].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_down_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_DOWN].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_down_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_DOWN].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_left_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_LEFT].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_left_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_LEFT].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_left_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_LEFT].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_left_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_LEFT].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_right_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_RIGHT].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_right_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_RIGHT].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_right_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_RIGHT].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_right_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_RIGHT].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a1_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A1].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a1_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A1].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a1_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A1].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a1_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A1].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a2_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A2].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a2_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A2].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a2_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A2].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a2_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A2].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a3_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A3].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a3_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A3].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a3_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A3].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a3_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A3].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a4_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A4].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a4_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A4].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a4_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A4].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_a4_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_A4].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l1_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L1].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l1_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L1].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l1_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L1].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l1_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L1].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l2_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L2].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l2_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L2].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l2_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L2].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l2_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L2].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l3_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L3].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l3_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L3].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l3_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L3].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_l3_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_L3].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r1_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R1].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r1_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R1].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r1_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R1].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r1_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R1].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r2_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R2].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r2_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R2].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r2_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R2].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r2_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R2].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r3_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R3].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r3_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R3].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r3_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R3].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_r3_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_R3].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_select_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_SELECT].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_select_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_SELECT].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_select_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_SELECT].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_select_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_SELECT].release';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_start_button_is_down'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_START].down';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_start_button_is_up'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_START].up';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_start_button_is_press'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_START].press';
    return [code, 0];
}
lua.luaGenerator.forBlock['gamepad_start_button_is_release'] = function (block, generator) {
    const code = 'L.riv.keys[L.RIV_GAMEPAD_START].release';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_create_waveform'] = function (block, generator) {
    const text_name = block.getFieldValue('NAME');
    const dropdown_type = block.getFieldValue('type');
    const number_delay = block.getFieldValue('delay');
    const number_attack = block.getFieldValue('attack');
    const number_decay = block.getFieldValue('decay');
    const number_sustain = block.getFieldValue('sustain');
    const number_release = block.getFieldValue('release');
    const number_start_frequency = block.getFieldValue('start_frequency');
    const number_end_frequency = block.getFieldValue('end_frequency');
    const number_amplitude = block.getFieldValue('amplitude');
    const number_sustain_level = block.getFieldValue('sustain_level');
    const number_duty_cycle = block.getFieldValue('duty_cycle');
    const number_pan = block.getFieldValue('pan');
    var code = text_name + ` = ffi.new("riv_waveform_desc")\n`
    code = code + text_name + `.type = L.` + dropdown_type + `\n`
    code = code + text_name + `.attack = ` + number_attack + `\n`
    code = code + text_name + `.delay = ` + number_delay + `\n`
    code = code + text_name + `.decay = ` + number_decay + `\n`
    code = code + text_name + `.sustain = ` + number_sustain + `\n`
    code = code + text_name + `.release = ` + number_release + `\n`
    code = code + text_name + `.start_frequency = ` + number_start_frequency + `\n`
    code = code + text_name + `.end_frequency = ` + number_end_frequency + `\n`
    code = code + text_name + `.amplitude = ` + number_amplitude + `\n`
    code = code + text_name + `.sustain_level = ` + number_sustain_level + `\n`
    code = code + text_name + `.duty_cycle = ` + number_duty_cycle + `\n`
    code = code + text_name + `.pan = ` + number_pan + `\n`
    return code;
}

lua.luaGenerator.forBlock['riv_waveform'] = function (block, generator) {
    const text_name = block.getFieldValue('NAME');
    const code = 'L.riv_waveform(' + text_name + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_srand'] = function (block, generator) {
    const value_a = generator.valueToCode(block, 'a', 0);
    const value_b = generator.valueToCode(block, 'b', 0);
    const code = 'L.riv_srand(' + value_a + ', ' + value_b + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_rand'] = function (block, generator) {
    const code = 'L.riv_rand()';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_rand_float'] = function (block, generator) {
    const code = 'L.riv_rand_float()';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_rand_uint'] = function (block, generator) {
    const value_high = generator.valueToCode(block, 'high', 0);
    const code = 'u64_to_u32(L.riv_rand_uint(' + value_high + '))';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_rand_int'] = function (block, generator) {
    const value_low = generator.valueToCode(block, 'low', 0);
    const value_high = generator.valueToCode(block, 'high', 0);
    const code = 'L.riv_rand_int(' + value_low + ', ' + value_high + ')';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_get_frame'] = function (block, generator) {
    const code = 'u64_to_u32(L.riv.frame)';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_get_screen_height'] = function (block, generator) {
    const code = 'L.riv.height';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_get_screen_width'] = function (block, generator) {
    const code = 'L.riv.width';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_set_screen_height'] = function (block, generator) {
    const value_pixels = generator.valueToCode(block, 'pixels', 0);
    const code = 'L.riv.height = ' + value_pixels + '\n';
    return code;
}

lua.luaGenerator.forBlock['riv_set_screen_width'] = function (block, generator) {
    const value_pixels = generator.valueToCode(block, 'pixels', 0);
    const code = 'L.riv.width = ' + value_pixels + '\n';
    return code;
}

lua.luaGenerator.forBlock['riv_get_target_fps'] = function (block, generator) {
    const code = 'L.riv.target_fps';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_set_target_fps'] = function (block, generator) {
    const value_fps = generator.valueToCode(block, 'fps', 0);
    const code = 'L.riv.target_fps = ' + value_fps + '\n';
    return code;
}

lua.luaGenerator.forBlock['riv_get_time_ms'] = function (block, generator) {
    const code = 'L.riv.time_ms';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_get_time_secs'] = function (block, generator) {
    const code = 'L.riv.time';
    return [code, 0];
}

lua.luaGenerator.forBlock['riv_quit'] = function (block, generator) {
    const code = 'L.riv.quit = true\n';
    return code;
}

lua.luaGenerator.forBlock['riv_set_outcard'] = function (block, generator) {
    var text_outcard = block.getFieldValue('outcard');
    const value_outcard = generator.valueToCode(block, 'outcard', 0);
    if (value_outcard.length > 0) {
        text_outcard = value_outcard;
    }
    const code = 'L.riv.outcard_len = L.riv_snprintf(ffi.cast("char *",L.riv.incard + L.RIV_SIZE_INCARD), L.RIV_SIZE_OUTCARD, ' + text_outcard + ')\n';
    return code;
}

lua.luaGenerator.forBlock['riv_color_black'] = function (block, generator) {
    return [0, 0];
}
lua.luaGenerator.forBlock['riv_color_white'] = function (block, generator) {
    return [1, 0];
}
lua.luaGenerator.forBlock['riv_color_lightgrey'] = function (block, generator) {
    return [2, 0];
}
lua.luaGenerator.forBlock['riv_color_grey'] = function (block, generator) {
    return [3, 0];
}
lua.luaGenerator.forBlock['riv_color_darkslate'] = function (block, generator) {
    return [4, 0];
}
lua.luaGenerator.forBlock['riv_color_slate'] = function (block, generator) {
    return [5, 0];
}
lua.luaGenerator.forBlock['riv_color_lightslate'] = function (block, generator) {
    return [6, 0];
}
lua.luaGenerator.forBlock['riv_color_lightteal'] = function (block, generator) {
    return [7, 0];
}
lua.luaGenerator.forBlock['riv_color_lightblue'] = function (block, generator) {
    return [8, 0];
}
lua.luaGenerator.forBlock['riv_color_blue'] = function (block, generator) {
    return [9, 0];
}
lua.luaGenerator.forBlock['riv_color_darkergreen'] = function (block, generator) {
    return [10, 0];
}
lua.luaGenerator.forBlock['riv_color_darkgreen'] = function (block, generator) {
    return [11, 0];
}
lua.luaGenerator.forBlock['riv_color_green'] = function (block, generator) {
    return [12, 0];
}
lua.luaGenerator.forBlock['riv_color_lightgreen'] = function (block, generator) {
    return [13, 0];
}
lua.luaGenerator.forBlock['riv_color_lightyellow'] = function (block, generator) {
    return [14, 0];
}
lua.luaGenerator.forBlock['riv_color_lightpeach'] = function (block, generator) {
    return [15, 0];
}
lua.luaGenerator.forBlock['riv_color_peach'] = function (block, generator) {
    return [16, 0];
}
lua.luaGenerator.forBlock['riv_color_lightbrown'] = function (block, generator) {
    return [17, 0];
}
lua.luaGenerator.forBlock['riv_color_brown'] = function (block, generator) {
    return [18, 0];
}
lua.luaGenerator.forBlock['riv_color_darkbrown'] = function (block, generator) {
    return [19, 0];
}
lua.luaGenerator.forBlock['riv_color_darkerbrown'] = function (block, generator) {
    return [20, 0];
}
lua.luaGenerator.forBlock['riv_color_darkred'] = function (block, generator) {
    return [21, 0];
}
lua.luaGenerator.forBlock['riv_color_red'] = function (block, generator) {
    return [22, 0];
}
lua.luaGenerator.forBlock['riv_color_lightred'] = function (block, generator) {
    return [23, 0];
}
lua.luaGenerator.forBlock['riv_color_orange'] = function (block, generator) {
    return [24, 0];
}
lua.luaGenerator.forBlock['riv_color_gold'] = function (block, generator) {
    return [25, 0];
}
lua.luaGenerator.forBlock['riv_color_yellow'] = function (block, generator) {
    return [26, 0];
}
lua.luaGenerator.forBlock['riv_color_lightpink'] = function (block, generator) {
    return [27, 0];
}
lua.luaGenerator.forBlock['riv_color_pink'] = function (block, generator) {
    return [28, 0];
}
lua.luaGenerator.forBlock['riv_color_darkpink'] = function (block, generator) {
    return [29, 0];
}
lua.luaGenerator.forBlock['riv_color_purple'] = function (block, generator) {
    return [30, 0];
}
lua.luaGenerator.forBlock['riv_color_darkpurple'] = function (block, generator) {
    return [31, 0];
}

lua.luaGenerator.forBlock['riv_image_font_5x7'] = function (block, generator) {
    return [4095, 0];
}
lua.luaGenerator.forBlock['riv_image_font_3x5'] = function (block, generator) {
    return [4094, 0];
}

lua.luaGenerator.forBlock['riv_align_topleft'] = function (block, generator) {
    return [0, 0];
}
lua.luaGenerator.forBlock['riv_align_top'] = function (block, generator) {
    return [1, 0];
}
lua.luaGenerator.forBlock['riv_align_topright'] = function (block, generator) {
    return [2, 0];
}
lua.luaGenerator.forBlock['riv_align_left'] = function (block, generator) {
    return [3, 0];
}
lua.luaGenerator.forBlock['riv_align_center'] = function (block, generator) {
    return [4, 0];
}
lua.luaGenerator.forBlock['riv_align_right'] = function (block, generator) {
    return [5, 0];
}
lua.luaGenerator.forBlock['riv_align_bottomleft'] = function (block, generator) {
    return [6, 0];
}
lua.luaGenerator.forBlock['riv_align_bottom'] = function (block, generator) {
    return [7, 0];
}
lua.luaGenerator.forBlock['riv_align_bottomright'] = function (block, generator) {
    return [8, 0];
}