var consts = {};

consts.color = {
    none: "None",
    white: "White",
    orange: "Orange",
    yellow: "Yellow",
    cyan: "Cyan",
    blue: "Blue",
    purple: "Purple",
    green: "Green",
    lightGreen: "LightGreen",
    red: "Red"
};

consts.stomps = {
    1: {
        name: "Wah Wah",
        params: [4, 6, 8, 9, 10, 12, 52, 53],
        color: consts.color.orange,
        isExpWah: true
    },
    2: {
        name: "Wah Low Pass",
        params: [4, 6, 8, 9, 10, 12, 52, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    3: {
        name: "Wah High Pass",
        params: [4, 6, 8, 9, 10, 12, 52, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    4: {
        name: "Wah Vowel Filter",
        params: [4, 6, 8, 9, 10, 12, 52, 53],  //13, 14, 15, 
		color: consts.color.orange,
		isExpWah: true
    },
    6: {
        name: "Wah Phaser",
        params: [4, 6, 8, 9, 10, 12, 26, 27, 52, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    7: { 
        name: "Wah Flanger",
        params: [4, 6, 8, 9, 10, 12, 52, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    8: {
        name: "Wah Rate Reducer",
        params: [4, 6, 8, 9, 10, 12, 52, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    9: {
        name: "Wah Ring Modulator",
        params: [4, 6, 8, 10, 12, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    10: {
        name: "Wah Freq Shifter",
        params: [4, 6, 8, 10, 12, 53],
		color: consts.color.orange,
		isExpWah: true
    },
    11: { //48
        name: "Pedal Pitch",
        params: [4, 6, 53, 56, 57],
        color: consts.color.orange,
        isExpPitch: true
    },
    12: { 
        name: "Wah Formant Shift",
        params: [4, 6, 8, 10, 12, 53, 57],
		color: consts.color.orange,
		isExpWah: true
    },
    13: {
        name: "Pedal Vinyl Stop",
        params: [4, 6],
        color: consts.color.lightGreen,
    },
    20: { //14
        name: "Hard Shaper",
        params: [6, 16],
        color: consts.color.red,        
    },
    21: { //15
        name: "Wave Shaper",
        params: [6, 16],
        color: consts.color.red,
    },
    33: { //16
        name: "Green Screem",
        params: [6, 16, 17],
        color: consts.color.red,
    },
    17: {
        name: "Bit Shaper",
        params: [6, 16, 17],
        color: consts.color.red,
    },
    18: {
        name: "Recti Shaper",
        params: [6, 16, 53],
        color: consts.color.red,
    },
    19: {
        name: "Soft Shaper",
        params: [6, 16],
        color: consts.color.red,
    },
    39: { //22
        name: "Metal DS",
        params: [6, 16, 42, 44, 46, 47],
        color: consts.color.red,
    },
    113: { //23
        name: "Treble Booster",
        params: [6, 17, 53],
        color: consts.color.red,
    },
    114: { // 24
        name: "Lead Booster",
        params: [6, 17, 53],
        color: consts.color.red,
    },
    115: { // 25
        name: "Pure Booster",
        params: [6],
        color: consts.color.red,
    },
    116: { //26
        name: "Wah Pedal Booster",
        params: [6, 10],
        color: consts.color.red,
    },
    97: { //27
        name: "Graphic Equalizer",
        params: [4, 6, 34, 35, 36, 37, 38, 39, 40, 41, 53],
        color: consts.color.yellow,
    },
    98: { //28
        name: "Studio Equalizer",
        params: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
        color: consts.color.yellow,
    },
    99: { //29
        name: "Metal Equalizer",
        params: [4, 6, 42, 44, 46, 47, 53],
        color: consts.color.yellow,
    },
    101: { //30
        name: "Stereo Widener",
        params: [20, 21, 53],
        color: consts.color.yellow,
    },
    49: { //31
        name: "Compressor",
        params: [4, 6, 18, 19, 33],
        color: consts.color.cyan,
    },
    57: { //32
        name: "Gate 2:1",
        params: [18],
        color: consts.color.cyan,
    },
    34: {
        name: "Plus DS",
        params: [6, 16],
        color: consts.color.red,
    },
    35: {
        name: "One DS",
        params: [6, 16, 17],
        color: consts.color.red,
    },
    36: {
        name: "Muffin",
        params: [6, 16, 17],
        color: consts.color.red,
    },
    37: {
        name: "Mouse",
        params: [6, 16, 17],
        color: consts.color.red,
    },
    38: {
        name: "Fuzz DS",
        params: [6, 16],
        color: consts.color.red,
    },
    70: { //40
        name: "Tremolo",
        params: [6, 20, 21, 23, 53],
        color: consts.color.blue,
    },
    81: { //41
        name: "Phaser",
        params: [4, 6, 20, 21, 22, 25, 26, 27, 53],
        color: consts.color.blue,
    },
    82: { //42
        name: "Phase Vibe",
        params: [4, 6, 20, 21, 22, 25, 26, 27, 53],
        color: consts.color.blue,
    },
    83: { //43
        name: "Phaser Oneway",
        params: [4, 6, 20, 21, 22, 25, 26, 27, 53],
        color: consts.color.blue,
    },
    89: { //44
        name: "Flanger",
        params: [4, 6, 20, 21, 22, 25, 53],
        color: consts.color.blue,
    },
    91: { //45
        name: "Flanger Oneway",
        params: [4, 6, 20, 21, 22, 25, 53],
        color: consts.color.blue,
    },
    64: { //46
        name: "Space",
        params: [54],
        color: consts.color.green,
    },
    129: { //47
        name: "Transpose",
        params: [56],
        color: consts.color.lightGreen,
    },
    130: { //50
        name: "Chromatic Pitch",
        params: [6, 53, 54, 55, 56, 57, 58, 60, 61, 65, 66],
        color: consts.color.lightGreen,
    },
    131: { //51
        name: "Harmonic Pitch",
        params: [6, 53, 54, 55, 61, 62, 63, 64, 65, 66],
        color: consts.color.lightGreen,
    },
    132: { //52
        name: "Analog Octaver",
        params: [6, 23, 53, 54, 55],
        color: consts.color.lightGreen,
    },
    121: { //53
        name: "Loop Mono",
        params: [4, 6, 53],
        color: consts.color.white,
    },
    122: { //54
        name: "Loop Stereo",
        params: [4, 6, 53],
        color: consts.color.white,
    },
    123: { //55
        name: "Loop Distortion",
        params: [6],
        color: consts.color.white,
    },
    58: { //58
        name: "Gate 4:1",
        params: [18],
        color: consts.color.cyan,
    },
    65: {
        name: "Vintage Chorus",
        params: [4, 6, 20, 21, 23, 53],
        color: consts.color.blue,
    },
    66: {
        name: "Hyper Chorus",
        params: [4, 6, 21, 23, 24, 53],
        color: consts.color.blue,
    },
    67: {
        name: "Air Chorus",
        params: [6, 21, 23],
        color: consts.color.blue,
    },
    68: {
        name: "Vibrato",
        params: [6, 20, 21, 23],
        color: consts.color.blue,
    },
    69: {
        name: "Rotary Speaker",
        params: [4, 6, 30, 31, 32, 53],
        color: consts.color.blue,
    },
    71: {
        name: "Micro Pitch",
        params: [4, 6, 21, 23, 53],
        color: consts.color.blue,
    }
};

for (var a in consts.stomps) {
    consts.stomps[a].id = parseInt(a);
}

consts.stompParams = {
    0  : "t|Type",
    3  : "b|On/Off",
    4  : "Mix",
    6  : "Volume",
    7  : "Stereo",
    8  : "Wah Manual",
    9  : "Wah Peak",
    10 : "Wah Range",
    12 : "wpm|Wah Pedal Mode",
    13 : "Wah Touch Attack",
    14 : "Wah Touch Release",
    15 : "Wah Touch Boost",
    16 : "Distortion/Shaper Drive",
    17 : "Distortion/Booster Tone",
    18 : "Compressor/Gate Intensity",
    19 : "Compressor Attack",
    20 : "Modulation Rate", //modrate|  @ersin: there is a problem with modrate, investigate
    21 : "Modulation Depth",
    22 : "Modulation Feedback",
    23 : "Modulation Crossover",
    24 : "Modulation HyperChorus Amount",
    25 : "Modulation Manual",
    26 : "Modulation Phaser Peak Spread",
    27 : "modstages|Modulation Phaser Stages",
    30 : "rotaryspeed|Rotary Speed (Slow-Off/Fast-On)",
    31 : "Rotary Distance",
    32 : "Rotary Balance",
    33 : "Compressor Squash",
    34 : "Graphic EQ Band 1",
    35 : "Graphic EQ Band 2",
    36 : "Graphic EQ Band 3",
    37 : "Graphic EQ Band 4",
    38 : "Graphic EQ Band 5",
    39 : "Graphic EQ Band 6",
    40 : "Graphic EQ Band 7",
    41 : "Graphic EQ Band 8",
    42 : "Parametric EQ Low Gain",
    43 : "Parametric EQ Low Frequency",
    44 : "Parametric EQ High Gain",
    45 : "Parametric EQ High Frequency",
    46 : "Parametric EQ Peak Gain",
    47 : "Parametric EQ Peak Frequency",
    48 : "Parametric EQ Peak Q-Factor",
    49 : "Parametric EQ Peak Gain 2",
    50 : "Parametric EQ Peak Frequency 2",
    51 : "Parametric EQ Peak Q-Factor 2",
    52 : "Wah Peak Range",
    53 : "Ducking",
    55 : "Voice Mix",
    56 : "pitch|Voice 1 Pitch",
    57 : "pitch|Voice 2 Pitch",
    58 : "Detune",
    60 : "b|Smooth Chords",
    61 : "b|Pure Tuning",
    62 : "voiceinterval|Voice 1 Interval",
    63 : "voiceinterval|Voice 2 Interval",
    64 : "key|Key",
    65 : "b|Free Formants",
    66 : "Formant Shift"
};

consts.params = {
    4: {
        name: "Rig",
        params: {
            0: "l6|Rig Tempo",
            1: "Rig Volume",
            2: "b|Rig Tempo Enable"
        },
    },
    9: {
        name: "Input",
        params: {
            3: "Noise Gate Intensity",
            4: "Input Clean Sense",
            5: "Input Distortion Sense"
        }
    },
    10: {
        name: "Amplifier",
        params: {
            2 : "b|On/Off",
            4 : "Gain",
            6 : "Definition",
            7 : "Clarity",
            8 : "Power Sagging",
            9 : "Pick",
            10: "Compressor",
            11: "Tube Shape",
            12: "Tube Bias",
            15: "Direct Mix"
        }
    },
    11: {
        name: "Equalizer",
        params: {
            2: "b|On/Off",
            4: "Bass",
            5: "Middle",
            6: "Treble",
            7: "Presence"
        }
    },
    12: {
        name: "Cabinet",
        params: {
            2 : "b|On/Off",
            3 : "Volume",
            4 : "High Shift",
            5 : "Low Shift",
            6 : "Character"
        }
    },
    50: {
        name: "Stomp A",
        params: consts.stompParams
    },
    51: {
        name: "Stomp B",
        params: consts.stompParams
    },
    52: {
        name: "Stomp C",
        params: consts.stompParams
    },
    53: {
        name: "Stomp D",
        params: consts.stompParams
    },
    56: {
        name: "Stomp X",
        params: consts.stompParams
    },
    58: {
        name: "Stomp MOD",
        params: consts.stompParams
    },
    74: {
        name: "Delay",
        color: consts.color.green,
        params: {
            0 : "delaytype|Type",
            2 : "b|On/Off (cuts tail)",
            3 : "Mix",
            4 : "Volume",
            5 : "Time",
            6 : "delayratio|Ratio",
            7 : "delayclock|Clock Left",
            8 : "delayclock|Clock Right",
            9 : "Feedback",
            10: "Bandwidth",
            11: "Center Frequency",
            12: "Modulation",
            13: "b|On/off (keeps tail)",
            14: "Ducking"
        }
    },
    75: {
        name: "Reverb",
        color: consts.color.green,
        params: {
            0 : "reverbtype|Type",
            2 : "On/off (cuts tail)",
            3 : "Mix",
            4 : "Volume",
            5 : "Del/Rev Balance",
            6 : "Time",
            7 : "Damping",
            8 : "Bandwidth",
            9 : "Center Frequency",
            10: "Pre-delay",
            11: "On/off (keeps tail)",
            12: "Ducking"
        }
    },
    127: {
        name: "System/Global",
        params: {
            0 : "Main Output Volume",
            1 : "Headphone Output Volume",
            2 : "Monitor Output Volume",
            3 : "Direct Output Volume",
            4 : "SPDIF Volume",
            8 : "b|Monitor Cab Off",
            11: "b|S/PDIF Input Enable",
            12: "Main Output EQ Bass",
            13: "Main Output EQ Middle",
            14: "Main Output EQ Treble",
            15: "Main Output EQ Presence",
            17: "Monitor Output EQ Bass",
            18: "Monitor Output EQ Middle",
            19: "Monitor Output EQ Treble",
            21: "Monitor Output EQ Presence"
        }
    }
}

consts.MaxPage = 125;

consts.types = {
};

consts.types.wpm = {
    options: ["Off", "Touch", "On", "Bypass @ Stop", "Bypass @ Heel", "Bypass @ Toe"]
};
        
consts.types.pitch = {options: {}};
for (var i=-36;i<=36;i++)
    consts.types.pitch.options[(i + 64).toString()] = i.toString();

/*
consts.types.modrate = {options: {}};
for (var i=0;i<=127;i++)
    consts.types.modrate.options[(i).toString()] = i.toString();
*/

consts.types.key = {options: ["C/Am", "Db/Bbm", "D/Bm", "Eb/Cm", "E/C#m", "F/Dm", "F#/D#m", "G/Em", "Ab/Fm", "A/F#m", "Bb/Gm", "B/G#m"]};

consts.types.modstages = {options: {}};
for (var i=0;i<=5;i++)
    consts.types.modstages.options[(i).toString()] = "Stages " + ((i+1)*2);

consts.types.voiceinterval = {options: {}};
var o = "-3 Oct,-21th,-20th,-19th,-18th,-17th,-16th,-2 Oct,-14th,-13th,-12th,-11th,-10th,-9th,-8th,-1 Oct,-7th,-6th,-5th,-4th,-3rd,-2nd,Unision,+2nd,+3rd,+4th,+5th,+6th,+7th,+1 Oct,+9th,+10th,+11th,+12th,+13th,+14th,+2 Oct,+16th,+17th,+18th,+19th,+20th,+21th,+3 Oct,User Scale1 -2 Oct,User Scale1 -1 Oct,User Scale1,User Scale1 +1 Oct,User Scale1 +2 Oct,User Scale2 -2 Oct,User Scale2 -1 Oct,User Scale2,User Scale2 +1 Oct,User Scale2 +2 Oct";
o = o.split(",");
for (var a in o) {
    consts.types.voiceinterval.options[parseInt(a) + 42] = o[a];
}

consts.types.t = {options: {}};
for (var a in consts.stomps) {
    consts.types.t.options[a] = consts.stomps[a].name;
}

consts.types.delayratio = {options: ["1:4","2:4","3:4","4:4","4:3","4:2","4:1"]};

consts.types.delaytype = {options: ["","Tap Delay","Free Delay","Analog Delay"]};

consts.types.delayclock = {options: ["1/32","1/16","2/16","3/16","4/16","5/16","6/16","7/16","8/16","1/24(Triplet)","1/12(Triplet)","2/12(Triplet)","4/12(Triplet)"]};

consts.types.b = {options: ["Off", "On"]};

consts.types.reverbtype = {options: ["","Hall","Large Room","Small Room", "Ambience", "Matchbox"]};

for (var a in consts.types) {
    var t = consts.types[a];
    t.minValue = 100000;
    t.maxValue = -1;
    if (t.options) {
        for (var b in t.options) {
            var c = parseInt(b);
            t.minValue = Math.min(t.minValue, c);
            t.maxValue = Math.max(t.maxValue, c);
        }
    } else {
        t.minValue = 0;
        t.maxValue = 100;
    }
}

module.exports = consts;