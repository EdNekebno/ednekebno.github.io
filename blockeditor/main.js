// Global variables
var images = []; // Holds data about any upload images
var riv_palette = [0x000000, 0xFFFFFF, 0xDBCDC5, 0x726B68, 0x251418, 0x583635, 0xB6978B, 0xE9E95E, 0xDC9028, 0xA73118, 0x393205, 0x415F00, 0x3BB208, 0x41F647, 0x75FFE8, 0x82BEFB, 0x5197DE, 0x3168B6, 0x26498A, 0x141C46, 0x0D091E, 0x0D0D72, 0x2424DA, 0x4400FF, 0x106EEF, 0x11ABEC, 0x10E9EC, 0x8D8DF7, 0x6D4EF9, 0x5824C1, 0x521284, 0x3B083D];
var color_palette = []; // The actual color palette used by the game
var palette_offset = 32; // Position of the next free color in the palette
var default_workspace = '{"workspaceComments": [ {"height": 165.45452880859375, "width": 255.75753784179688, "id": "$IJ8(J#G7q:/@R$=s_b%", "x": 110, "y": 110, "text": "The function main gets called when the program starts. The loop here displays each frame of the game. You normally want to call some functions from here but, for an example here, it just clears the screen to white." } ], "blocks": {"languageVersion": 0, "blocks": [ {"type": "procedures_defnoreturn", "id": "L2^Y.iBvd3G=l-XGU,ve", "x": 110, "y": 290, "icons": {"comment": {"text": "Describe this function...", "pinned": false, "height": 80, "width": 160 } }, "fields": {"NAME": "main" }, "inputs": {"STACK": {"block": {"type": "controls_whileUntil", "id": ":Zy[KY5VITT*d0-~DGv0", "fields": {"MODE": "WHILE" }, "inputs": {"BOOL": {"block": {"type": "riv_present", "id": "HKl3n;KBbtv.~(b!n%OA", "fields": {"NAME": "riv_present" } } }, "DO": {"block": {"type": "riv_clear", "id": ";TwLJ`2tnnr2jayD6;`3", "fields": {"NAME": "riv_clear" }, "inputs": {"color": {"block": {"type": "riv_color_white", "id": "GB)RO+NO*Mk%NxR$eURq" } } } } } } } } } } ] }, "color_palette": [ 0, 16777215, 14405061, 7498600, 2429976, 5781045, 11966347, 15329630, 14454824, 10957080, 3748357, 4284160, 3912200, 4322887, 7733224, 8568571, 5347294, 3238070, 2509194, 1317958, 854302, 855410, 2368730, 4456703, 1076975, 1158124, 1108460, 9276919, 7163641, 5776577, 5378692, 3868733, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "images": [], "palette_offset": 32 }';
var workspace; // Our blocks workspace
var programdata = ""; // Data for a program to send to the rives emulator (on clicking run)
var programdatalength = 0; // The length of the programdata

/*
    WINDOW EVENTS
*/

window.onload = function () {
    // Sets up the workspace and image structures
    var bd = document.getElementById("blocklyDiv");
    bd.style.height = window.innerHeight - bd.offsetTop + 'px';
    bd.style.width = (document.body.offsetWidth - 530) + "px";
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox, zoom:
        {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true
        }, grid:
        {
            spacing: 20,
            length: 20,
            colour: '#ddd',
            snap: true
        }
    });
    Blockly.ContextMenuItems.registerCommentOptions();
    // Set the color palette to the RIVES color palette
    // We'll later manage the colors in the copy depending on the
    // images the user uploads.
    for (var i = 0; i < riv_palette.length; i++) {
        color_palette.push(riv_palette[i]);
    }
    for (var j = 0; j < 256 - riv_palette.length; j++) {
        color_palette.push(0);
    }

    // Load snake game tutorial
    var rrr = JSON.parse(snake_game);
    Blockly.serialization.workspaces.load(rrr, Blockly.getMainWorkspace());
    color_palette = rrr.color_palette;
    images = rrr.images;
    palette_offset = rrr.palette_offset;
    document.getElementById('uploadfile').value = '';
    // Update the images list in the toolbox
    updateToolboxImages();
}

document.addEventListener('keydown', function (ev) {
    // Monitor for a spacebar press because Blockly
    // doesn't seem to work with them for text input.
    // We can then fake it into the text input box!
    if (ev.which == 32) {
        let input = document.activeElement;
        let pos = input.selectionStart
        let front = (input.value).substring(0, pos);
        let back = (input.value).substring(pos, input.value.length);
        input.value = front + ' ' + back;
        pos = pos + 1;
        input.selectionStart = pos;
        input.selectionEnd = pos;
        input.focus();
    }
});

/*
    IMAGE MANAGEMENT
*/

function uploadImage() {
    // Handles uplaoding an image
    var files = document.getElementById('uploadimage').files;
    if (files.length <= 0) {
        return false;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var arrayBuffer = this.result, array = new Uint8Array(arrayBuffer);
        var b64encoded = btoa(String.fromCharCode.apply(null, array));
        var img = new Image();
        // The reader has given us an array buffer of the png file
        // which has been converted to base 64. We can then set
        // the data: on an img and wait for it to load
        img.onload = function () {
            // We want to get the pixel data. PNG file format is too
            // complicated - so draw it onto a canvas and read it pixel by pixel!
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var ab = ctx.getImageData(0, 0, img.width, img.height).data;
            var nimg = new Uint8Array(img.width * img.height);
            var missingcolor = 0;
            // We need to translate the RGBA colors we get from the canvas
            // to the color in the color palette. If it's not there then
            // add it.
            for (var h = 0; h < ab.length; h = h + 4) {
                var tv = (ab[h + 2] * 65536) + (ab[h + 1] * 256) + ab[h];
                var found = 0;
                var v = 0;
                for (var z = 0; z < color_palette.length; z++) {
                    if (tv == color_palette[z]) {
                        found = 1;
                        v = z;
                        break;
                    }
                }
                nimg[h / 4] = v;
                if (found == 0) {
                    if (palette_offset < 255) {
                        color_palette[palette_offset] = tv;
                        z = palette_offset;
                        palette_offset++;
                    } else {
                        missingcolor = 1;
                    }
                }
            }
            if (missingcolor == 1) {
                alert("Some colors in this image aren't in the palette and there is no more palette space, so they will display incorrectly");
            }
            // Now we have image data that has 8 bits per pixel, but it's still
            // really big because the compression has been removed. So we'll use
            // the last palette color (255) as a marker to RLE encode it
            var rletemp = new Uint8Array(img.width * img.height);
            var rleto = 0;
            for (var q = 0; q < nimg.length; q++) {
                var cchar = nimg[q];
                var lc = 1;
                while ((nimg[q + lc] == cchar) && ((q + lc) < nimg.length) && (lc < 250)) {
                    lc = lc + 1;
                }
                if (lc < 4) {
                    rletemp[rleto] = cchar;
                    rleto = rleto + 1;
                } else {
                    rletemp[rleto] = 255;
                    rletemp[rleto + 1] = lc;
                    rletemp[rleto + 2] = cchar;
                    rleto = rleto + 3;
                    q = q + lc - 1;
                }
            }
            var rle = new Uint8Array(rleto);
            for (var s = 0; s < rleto; s++) {
                rle[s] = rletemp[s];
            }
            // Finally we can push the image meta data and the rle compressed binary data
            // to the list of files
            var to_append = [files[0].name, img.width, img.height, rle];
            images.push(to_append);
            document.getElementById('uploadimage').value = '';
            // And just update the list in the interface!
            updateToolboxImages();
        }
        img.src = "data:image/png;base64, " + b64encoded;
    }
    reader.readAsArrayBuffer(files[0]);
}

function deleteImage(iname) {
    // Delete an image by removing it from the list
    // Note that currently this doesn't delete any
    // palette colors that aren't used by other images.
    // In future it should probably do that!
    var newimages = [];
    for (var i = 0; i < images.length; i++) {
        if (images[i][0] != iname) {
            newimages.push(images[i]);
        }
    }
    images = newimages;
    // Update the list in the workspace
    updateToolboxImages();
}

function updateToolboxImages() {
    // Loop through images in our list and write them
    // to the UI
    var tb = document.getElementsByClassName('blocklyToolboxContents')[0];
    // Create the imagelisting div if it doesn't exist,
    // otherwise get a reference to it...
    var imageslisting = document.getElementById('imagelist');
    if (typeof imageslisting == 'undefined' || imageslisting == null) {
        imageslisting = document.createElement("div");
        imageslisting.id = "imagelist";
        imageslisting.style = "padding: 10px;";
        tb.appendChild(imageslisting);
    }
    imageslisting.innerHTML = '';
    if (images.length > 0) {
        for (var i = 0; i < images.length; i++) {
            var ti = document.createElement("div");
            ti.innerHTML = images[i][0] + "&nbsp;&nbsp;<a style='cursor: hand; color: red;' onClick='deleteImage(" + '"' + images[i][0] + '"' + ")'>x</a>";
            imageslisting.appendChild(ti);
        }
    }
}

/*
    BLOCKLY WORKSPACE FUNCTIONS
*/

function saveWorkspace() {
    // Serialize and save the state to a download file.
    var state = Blockly.serialization.workspaces.save(workspace);
    state.color_palette = color_palette;
    state.images = images;
    state.palette_offset = palette_offset;
    JSONToFile(state, 'rives');
}

function uploadWorkspace(evt) {
    // Allow the user to upload a JSON file with the workspace state
    var files = document.getElementById('uploadfile').files;
    if (files.length <= 0) {
        return false;
    }
    files[0].text().then(function (text) {
        // Parse the file and set the workspace and images data
        var result = JSON.parse(text);
        Blockly.serialization.workspaces.load(result, Blockly.getMainWorkspace());
        color_palette = result.color_palette;
        images = result.images;
        palette_offset = result.palette_offset;
        // Clear the uploaded file box as otherwise trying to
        // upload a file with the same name twice in a row
        // doesn't work
        document.getElementById('uploadfile').value = '';
        // Update image list in UI
        updateToolboxImages();
    })
}

function newWorkspace() {
    // Clears all workspace data and resets it
    // to a very basic template workspace
    Blockly.serialization.workspaces.load(JSON.parse(default_workspace), Blockly.getMainWorkspace());
    for (var i = 0; i < riv_palette.length; i++) {
        color_palette[i] = riv_palette[i];
    }
    for (var j = 0; j < 256 - riv_palette.length; j++) {
        color_palette[i] = 0;
    }
    images = [];
    palette_offset = 32;
    updateToolboxImages();
}

/*
    UTILITY FUNCTIONS
*/

function makeCode() {
    // Generate code from the blocks
    // This is not currently called, but writes it to console
    var pal = "\n";
    for (var p = 0; p < 256; p++) {
        pal = pal + "L.riv.palette[" + p + "] = " + color_palette[p] + "\n"
    }
    const code = lua_header + pal + lua.luaGenerator.workspaceToCode(workspace) + "\nmain()\n";
    console.log(code);
}

const JSONToFile = (obj, filename) => {
    // Save a json file from obj
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
        type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);
};

String.prototype.hexEncode = function () {
    // Hex encoder
    var hex, i;
    var result = "";
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("0" + hex).slice(-2);
    }
    return result
}

async function startEmulator() {
    // Generate the code from the blocks and send it to the rives emulator
    var pal = "\n";
    for (var p = 0; p < 256; p++) {
        pal = pal + "L.riv.palette[" + p + "] = " + color_palette[p] + "\n"
    }
    programdata = pal + lua.luaGenerator.workspaceToCode(workspace) + "\nmain()\n";
    console.log(programdata);
    programdatalength = programdata.length;
    // We can send this code using the incard to a cartridge that contains a bootstrapper
    lastIncard = Uint8Array.from(Array.from(programdata.hexEncode().toUpperCase()).map(letter => letter.charCodeAt(0)));
    await rivemuUploadCartridge("https://raw.githubusercontent.com/EdNekebno/ednekebno.github.io/main/bootstrap.sqfs");
    console.log("running");
}


