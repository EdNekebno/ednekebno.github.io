Blockly.Blocks['riv_clear'] = {
    init: function () {
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField(new Blockly.FieldLabelSerializable('riv_clear'), 'NAME');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Clears the screen to the given color');
        this.setHelpUrl('');
        this.setColour(285);
    }
};

Blockly.Blocks['riv_draw_text'] = {
    init: function () {
        this.appendDummyInput('riv_draw_text')
            .appendField('riv_draw_text');
        this.appendValueInput('text')
            .setCheck('String')
            .appendField('text');
        this.appendValueInput('spritesheet')
            .setCheck('Number')
            .appendField('spritesheet');
        this.appendValueInput('anchor')
            .setCheck('Number')
            .appendField('anchor');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('size')
            .setCheck('Number')
            .appendField('size');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw text on the screen');
        this.setHelpUrl('');
        this.setColour(285);
    }
};

Blockly.Blocks['riv_present'] = {
    init: function () {
        this.appendDummyInput('color')
            .appendField(new Blockly.FieldLabelSerializable('riv_present'), 'NAME');
        this.setOutput(true, null);
        this.setTooltip('Displays the screen');
        this.setHelpUrl('');
        this.setColour(285);
    }
};

Blockly.Blocks['riv_load_palette'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_load_palette');
        this.appendDummyInput('filename')
            .appendField(new Blockly.FieldTextInput('filename'), 'file');
        this.appendDummyInput('start')
            .appendField(new Blockly.FieldNumber(0, 0, 255), 'startcol');
        this.setOutput(true, 'Number');
        this.setTooltip('Loads a png file with the color palette');
        this.setHelpUrl('');
        this.setColour(285);
    }
};

Blockly.Blocks['riv_make_image'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_make_image');
        this.appendDummyInput('filename')
            .appendField(new Blockly.FieldTextInput('filename'), 'file');
        this.appendDummyInput('start')
            .appendField(new Blockly.FieldNumber(0, 0, 255), 'colorkey');
        this.setOutput(true, 'Number');
        this.setTooltip('Loads a png sprite image');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_image_rect'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_image_rect');
        this.appendValueInput('image_id')
            .setCheck('Number')
            .appendField('image_id');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('width')
            .setCheck('Number')
            .appendField('width');
        this.appendValueInput('height')
            .setCheck('Number')
            .appendField('height');
        this.appendValueInput('sx')
            .setCheck('Number')
            .appendField('sx');
        this.appendValueInput('sy')
            .setCheck('Number')
            .appendField('sy');
        this.appendValueInput('mw')
            .setCheck('Number')
            .appendField('mw');
        this.appendValueInput('mh')
            .setCheck('Number')
            .appendField('mh');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw an image');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_destroy_image'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_destroy_image');
        this.appendValueInput('image_id')
            .setCheck('Number')
            .appendField('image_id');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Destroy an image');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_make_spritesheet'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_make_spritesheet');
        this.appendValueInput('image_id')
            .setCheck('Number')
            .appendField('image_id');
        this.appendValueInput('sprite_width')
            .setCheck('Number')
            .appendField('sprite_width');
        this.appendValueInput('sprite_height')
            .setCheck('Number')
            .appendField('sprite_height');
        this.setOutput(true, null);
        this.setTooltip('Make a spritesheet from an image');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_sprite'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_sprite');
        this.appendValueInput('frame_number')
            .setCheck('Number')
            .appendField('frame number');
        this.appendValueInput('spritesheet_id')
            .setCheck('Number')
            .appendField('spritesheet_id');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('nw')
            .setCheck('Number')
            .appendField('nw');
        this.appendValueInput('nh')
            .setCheck('Number')
            .appendField('nh');
        this.appendValueInput('mw')
            .setCheck('Number')
            .appendField('mw');
        this.appendValueInput('mh')
            .setCheck('Number')
            .appendField('mh');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a sprite from a spritesheet');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_destroy_spritesheet'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_destroy_spritesheet');
        this.appendValueInput('spritesheet_id')
            .setCheck('Number')
            .appendField('spritesheet_id');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Destroy a spritesheet');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_point'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_point');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a point');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_line');
        this.appendValueInput('x0')
            .setCheck('Number')
            .appendField('x0');
        this.appendValueInput('y0')
            .setCheck('Number')
            .appendField('y0');
        this.appendValueInput('x1')
            .setCheck('Number')
            .appendField('x1');
        this.appendValueInput('y1')
            .setCheck('Number')
            .appendField('y1');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a line');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_rect_fill'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_rect_fill');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('w')
            .setCheck('Number')
            .appendField('w');
        this.appendValueInput('h')
            .setCheck('Number')
            .appendField('h');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a filled rectangle');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_rect_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_rect_line');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('w')
            .setCheck('Number')
            .appendField('w');
        this.appendValueInput('h')
            .setCheck('Number')
            .appendField('h');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a rectangle outline');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_quad_fill'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_quad_fill');
        this.appendValueInput('x0')
            .setCheck('Number')
            .appendField('x0');
        this.appendValueInput('y0')
            .setCheck('Number')
            .appendField('y0');
        this.appendValueInput('x1')
            .setCheck('Number')
            .appendField('x1');
        this.appendValueInput('y1')
            .setCheck('Number')
            .appendField('y1');
        this.appendValueInput('x2')
            .setCheck('Number')
            .appendField('x2');
        this.appendValueInput('y2')
            .setCheck('Number')
            .appendField('y2');
        this.appendValueInput('x3')
            .setCheck('Number')
            .appendField('x3');
        this.appendValueInput('y3')
            .setCheck('Number')
            .appendField('y3');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a filled quad');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_quad_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_quad_line');
        this.appendValueInput('x0')
            .setCheck('Number')
            .appendField('x0');
        this.appendValueInput('y0')
            .setCheck('Number')
            .appendField('y0');
        this.appendValueInput('x1')
            .setCheck('Number')
            .appendField('x1');
        this.appendValueInput('y1')
            .setCheck('Number')
            .appendField('y1');
        this.appendValueInput('x2')
            .setCheck('Number')
            .appendField('x2');
        this.appendValueInput('y2')
            .setCheck('Number')
            .appendField('y2');
        this.appendValueInput('x3')
            .setCheck('Number')
            .appendField('x3');
        this.appendValueInput('y3')
            .setCheck('Number')
            .appendField('y3');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a quad outline');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_box_fill'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_box_fill');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('w')
            .setCheck('Number')
            .appendField('w');
        this.appendValueInput('h')
            .setCheck('Number')
            .appendField('h');
        this.appendValueInput('rotation')
            .setCheck('Number')
            .appendField('rotation');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a filled box');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_box_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_box_line');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('w')
            .setCheck('Number')
            .appendField('w');
        this.appendValueInput('h')
            .setCheck('Number')
            .appendField('h');
        this.appendValueInput('rotation')
            .setCheck('Number')
            .appendField('rotation');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a fbox outline');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_circle_fill'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_circle_fill');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('diameter')
            .setCheck('Number')
            .appendField('diameter');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a filled circle');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_circle_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_circle_line');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('diameter')
            .setCheck('Number')
            .appendField('diameter');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a circle outline');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_ellipse_fill'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_ellipse_fill');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('w')
            .setCheck('Number')
            .appendField('w');
        this.appendValueInput('h')
            .setCheck('Number')
            .appendField('h');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a filled ellipse');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_ellipse_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_ellipse_line');
        this.appendValueInput('x')
            .setCheck('Number')
            .appendField('x');
        this.appendValueInput('y')
            .setCheck('Number')
            .appendField('y');
        this.appendValueInput('w')
            .setCheck('Number')
            .appendField('w');
        this.appendValueInput('h')
            .setCheck('Number')
            .appendField('h');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw an ellipse outline');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_triangle_fill'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_triangle_fill');
        this.appendValueInput('x0')
            .setCheck('Number')
            .appendField('x0');
        this.appendValueInput('y0')
            .setCheck('Number')
            .appendField('y0');
        this.appendValueInput('x1')
            .setCheck('Number')
            .appendField('x1');
        this.appendValueInput('y1')
            .setCheck('Number')
            .appendField('y1');
        this.appendValueInput('x2')
            .setCheck('Number')
            .appendField('x2');
        this.appendValueInput('y2')
            .setCheck('Number')
            .appendField('y2');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a filled triangle');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_draw_triangle_line'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_draw_triangle_line');
        this.appendValueInput('x0')
            .setCheck('Number')
            .appendField('x0');
        this.appendValueInput('y0')
            .setCheck('Number')
            .appendField('y0');
        this.appendValueInput('x1')
            .setCheck('Number')
            .appendField('x1');
        this.appendValueInput('y1')
            .setCheck('Number')
            .appendField('y1');
        this.appendValueInput('x2')
            .setCheck('Number')
            .appendField('x2');
        this.appendValueInput('y2')
            .setCheck('Number')
            .appendField('y2');
        this.appendValueInput('color')
            .setCheck('Number')
            .appendField('color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Draw a triangle outline');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_up_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_up_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_up_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_up_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_up_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_up_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_up_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_up_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_down_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_down_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_down_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_down_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_down_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_down_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_down_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_down_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_left_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_left_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_left_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_left_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_left_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_left_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_left_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_left_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_right_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_right_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_right_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_right_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_right_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_right_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_right_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_right_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_a1_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a1_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a1_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a1_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a1_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a1_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a1_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a1_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_a2_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a2_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a2_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a2_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a2_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a2_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a2_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a2_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_a3_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a3_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a3_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a3_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a3_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a3_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a3_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a3_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_a4_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a4_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a4_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a4_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a4_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a4_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_a4_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_a4_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_l1_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l1_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l1_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l1_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l1_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l1_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l1_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l1_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_l2_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l2_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l2_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l2_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l2_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l2_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l2_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l2_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_l3_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l3_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l3_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l3_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l3_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l3_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_l3_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_l3_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_r1_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r1_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r1_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r1_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r1_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r1_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r1_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r1_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_r2_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r2_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r2_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r2_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r2_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r2_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r2_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r2_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_r3_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r3_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r3_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r3_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r3_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r3_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_r3_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_r3_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_select_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_select_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_select_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_select_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_select_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_select_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_select_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_select_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['gamepad_start_button_is_down'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_start_button_is_down');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_start_button_is_up'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_start_button_is_up');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_start_button_is_press'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_start_button_is_press');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}
Blockly.Blocks['gamepad_start_button_is_release'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('gamepad_start_button_is_release');
        this.setOutput(true, null);
        this.setTooltip('Gamepad button check');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_create_waveform'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_create_waveform');
        this.appendDummyInput('variable')
            .appendField(new Blockly.FieldTextInput('variable_name'), 'NAME');
        this.appendDummyInput('type')
            .appendField(new Blockly.FieldDropdown([
                ['RIV_WAVEFORM_SINE', 'RIV_WAVEFORM_SINE'],
                ['RIV_WAVEFORM_SQUARE', 'RIV_WAVEFORM_SQUARE'],
                ['RIV_WAVEFORM_TRIANGLE', 'RIV_WAVEFORM_TRIANGLE'],
                ['RIV_WAVEFORM_SAWTOOTH', 'RIV_WAVEFORM_SAWTOOTH'],
                ['RIV_WAVEFORM_NOISE', 'RIV_WAVEFORM_NOISE'],
                ['RIV_WAVEFORM_PULSE', 'RIV_WAVEFORM_PULSE']
            ]), 'type');
        this.appendDummyInput('delay')
            .appendField('delay')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'delay');
        this.appendDummyInput('attack')
            .appendField('attack')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'attack');
        this.appendDummyInput('decay')
            .appendField('decay')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'decay');
        this.appendDummyInput('sustain')
            .appendField('sustain')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'sustain');
        this.appendDummyInput('release')
            .appendField('release')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'release');
        this.appendDummyInput('start_frequency')
            .appendField('start_frequency')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'start_frequency');
        this.appendDummyInput('end_frequency')
            .appendField('end_frequency')
            .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.001), 'end_frequency');
        this.appendDummyInput('amplitude')
            .appendField('amplitude')
            .appendField(new Blockly.FieldNumber(0, 0, 1, 0.001), 'amplitude');
        this.appendDummyInput('sustain_level')
            .appendField('sustain_level')
            .appendField(new Blockly.FieldNumber(0, 0, 1, 0.001), 'sustain_level');
        this.appendDummyInput('duty_cycle')
            .appendField('duty_cycle')
            .appendField(new Blockly.FieldNumber(0, 0, 1, 0.001), 'duty_cycle');
        this.appendDummyInput('pan')
            .appendField('pan')
            .appendField(new Blockly.FieldNumber(0, -1, 1, 0.001), 'pan');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Create a waveform');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_waveform'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_waveform');
        this.appendDummyInput('variable')
            .appendField(new Blockly.FieldTextInput('variable_name'), 'NAME');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Plays the previously created waveform with this name');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_srand'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_srand');
        this.appendValueInput('a')
            .setCheck('Number');
        this.appendValueInput('b')
            .setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Seed the random number generator');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_rand'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_rand');
        this.setOutput(true, null);
        this.setTooltip('Return a random  uint64 in range [0, MAX_UINT64]');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_rand_uint'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_rand_uint');
        this.appendValueInput('high')
            .setCheck('Number');
        this.setOutput(true, null);
        this.setTooltip('Return a random uint64 in range [0, high]');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_rand_int'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_rand_int');
        this.appendValueInput('low')
            .setCheck('Number');
        this.appendValueInput('high')
            .setCheck('Number');
        this.setOutput(true, null);
        this.setTooltip('Return a random int64 in range [low, high]');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_rand_float'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_rand_float');
        this.setOutput(true, null);
        this.setTooltip('Return a random float64 in range [0.0, 1.0]');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_get_frame'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_get_frame');
        this.setOutput(true, null);
        this.setTooltip('Return the current frame number');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_get_screen_height'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_get_screen_height');
        this.setOutput(true, null);
        this.setTooltip('Return the screen height in pixels');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_set_screen_height'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_set_screen_height');
        this.appendValueInput('pixels')
            .setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Sets the screen height in pixels');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_get_screen_width'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_get_screen_width');
        this.setOutput(true, null);
        this.setTooltip('Return the screen width in pixels');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_set_screen_width'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_set_screen_width');
        this.appendValueInput('pixels')
            .setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Sets the screen width in pixels');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_get_target_fps'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_get_target_fps');
        this.setOutput(true, null);
        this.setTooltip('Gets the target fps');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_set_target_fps'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_set_target_fps');
        this.appendValueInput('fps')
            .setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Sets the target fps');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_get_time_ms'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_get_time_ms');
        this.setOutput(true, null);
        this.setTooltip('Gets the time in ms');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_get_time_secs'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_get_time_secs');
        this.setOutput(true, null);
        this.setTooltip('Gets the time in secs');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_quit'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_quit');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Exits rives');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_set_outcard'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_set_outcard');
        this.appendValueInput('outcard')
            .appendField(new Blockly.FieldTextInput('outcard text'), 'outcard');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Sets the outcard');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_black'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_black');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_white'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_white');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightgrey'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightgrey');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_grey'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_grey');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkslate'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkslate');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_slate'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_slate');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightslate'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightslate');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightteal'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightteal');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightblue'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightblue');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_blue'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_blue');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkergreen'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkergreen');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkgreen'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkgreen');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_green'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_green');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightgreen'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightgreen');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightyellow'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightyellow');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightpeach'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightpeach');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_peach'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_peach');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightbrown'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightbrown');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_brown'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_brown');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkbrown'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkbrown');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkerbrown'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkerbrown');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkred'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkred');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_red'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_red');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightred'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightred');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_orange'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_orange');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_gold'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_gold');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_yellow'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_yellow');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_lightpink'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_lightpink');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_pink'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_pink');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkpink'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkpink');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_purple'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_purple');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_color_darkpurple'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_color_darkpurple');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_image_font_5x7'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_image_font_5x7');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_image_font_3x5'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_image_font_3x5');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_topleft'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_topleft');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_top'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_top');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_topright'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_topright');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_left'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_left');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_center'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_center');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_right'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_right');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_bottomleft'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_bottomleft');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_bottom'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_bottom');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}

Blockly.Blocks['riv_align_bottomright'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('riv_align_bottomright');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(285);
    }
}