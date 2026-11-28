/* ==========================================================================
   Manifiesto de Sincronización Voz ↔ Texto ↔ SFX/Frames (Gemini 3.8 TTS)
   Carpeta: audio/voice/ | Voz única de Narrador + diálogos humanos (Acto IV-A)
   ========================================================================== */
window.BLINKY_VOICE_SYNC = {
  "S01": {
    "audio": "audio/voice/voz_s1.mp3",
    "duration": 18.991,
    "startDelayMs": 220,
    "segments": [
      {
        "start": 0,
        "end": 18.991,
        "charStart": 0,
        "charEnd": 263
      }
    ],
    "cues": []
  },
  "S02": {
    "audio": "audio/voice/voz_s2.mp3",
    "duration": 22.13,
    "startDelayMs": 200,
    "deferSceneSfx": true,
    "deferFrames": true,
    "segments": [
      {
        "start": 0,
        "end": 14.66,
        "charStart": 0,
        "charEnd": 189
      },
      {
        "start": 14.66,
        "end": 22.13,
        "charStart": 189,
        "charEnd": 276
      }
    ],
    "cues": [
      {
        "at": 3.665,
        "type": "frame",
        "src": "images/s2.png",
        "transition": "fade"
      },
      {
        "at": 15.706,
        "type": "sfx",
        "src": "audio/s2.wav",
        "volume": 0.62
      }
    ]
  },
  "S03": {
    "audio": "audio/voice/voz_s3.mp3",
    "duration": 23.976,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 8.452,
        "charStart": 0,
        "charEnd": 117
      },
      {
        "start": 8.602,
        "end": 9.702,
        "charStart": 117,
        "charEnd": 134
      },
      {
        "start": 9.852,
        "end": 23.976,
        "charStart": 134,
        "charEnd": 287
      }
    ],
    "cues": [
      {
        "at": 8.502,
        "type": "sfxBoost",
        "volume": 0.85,
        "durationMs": 1350
      }
    ]
  },
  "S04": {
    "audio": "audio/voice/voz_s4.mp3",
    "duration": 21.525,
    "startDelayMs": 200,
    "deferFrames": true,
    "segments": [
      {
        "start": 0,
        "end": 9.967,
        "charStart": 0,
        "charEnd": 115
      },
      {
        "start": 10.617,
        "end": 21.525,
        "charStart": 115,
        "charEnd": 228
      }
    ],
    "cues": [
      {
        "at": 10.117,
        "type": "frame",
        "src": "images/s4.png",
        "transition": "fade"
      }
    ]
  },
  "S05": {
    "audio": "audio/voice/voz_s5.mp3",
    "duration": 22.933,
    "startDelayMs": 200,
    "deferSceneSfx": true,
    "segments": [
      {
        "start": 0,
        "end": 22.933,
        "charStart": 0,
        "charEnd": 254
      }
    ],
    "cues": [
      {
        "at": 14.218,
        "type": "sfx",
        "src": "audio/s5.wav",
        "volume": 0.65
      }
    ]
  },
  "S06": {
    "audio": "audio/voice/voz_s6.mp3",
    "duration": 22.282,
    "startDelayMs": 180,
    "deferSceneSfx": true,
    "deferFrames": true,
    "segments": [
      {
        "start": 0,
        "end": 5.304,
        "charStart": 0,
        "charEnd": 93
      },
      {
        "start": 5.854,
        "end": 6.684,
        "charStart": 93,
        "charEnd": 107
      },
      {
        "start": 6.784,
        "end": 7.024,
        "charStart": 107,
        "charEnd": 115
      },
      {
        "start": 7.754,
        "end": 22.282,
        "charStart": 115,
        "charEnd": 273
      }
    ],
    "cues": [
      {
        "at": 5.324,
        "type": "sfx",
        "src": "audio/s6.wav",
        "volume": 0.82
      },
      {
        "at": 6.784,
        "type": "frame",
        "src": "images/s6.png",
        "transition": "cut",
        "shake": true
      },
      {
        "at": 7.684,
        "type": "frame",
        "src": "images/s6_3.png",
        "transition": "fade"
      }
    ]
  },
  "S07": {
    "audio": "audio/voice/voz_s7.mp3",
    "duration": 18.808,
    "startDelayMs": 220,
    "segments": [
      {
        "start": 0,
        "end": 18.808,
        "charStart": 0,
        "charEnd": 211
      }
    ],
    "cues": []
  },
  "S08": {
    "audio": "audio/voice/voz_s8.mp3",
    "duration": 21.504,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 21.504,
        "charStart": 0,
        "charEnd": 258
      }
    ],
    "cues": []
  },
  "S09": {
    "audio": "audio/voice/voz_s9.mp3",
    "duration": 27.014,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 27.014,
        "charStart": 0,
        "charEnd": 271
      }
    ],
    "cues": []
  },
  "S10": {
    "audio": "audio/voice/voz_s10.mp3",
    "duration": 23.293,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 23.293,
        "charStart": 0,
        "charEnd": 273
      }
    ],
    "cues": []
  },
  "S11": {
    "audio": "audio/voice/voz_s11.mp3",
    "duration": 22.988,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 22.988,
        "charStart": 0,
        "charEnd": 259
      }
    ],
    "cues": []
  },
  "S12": {
    "audio": "audio/voice/voz_s12.mp3",
    "duration": 21.491,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 21.491,
        "charStart": 0,
        "charEnd": 239
      }
    ],
    "cues": []
  },
  "S13": {
    "audio": "audio/voice/voz_s13.mp3",
    "duration": 23.192,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 23.192,
        "charStart": 0,
        "charEnd": 271
      }
    ],
    "cues": []
  },
  "S14": {
    "audio": "audio/voice/voz_s14.mp3",
    "duration": 25.154,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 25.154,
        "charStart": 0,
        "charEnd": 279
      }
    ],
    "cues": []
  },
  "S15": {
    "audio": "audio/voice/voz_s15.mp3",
    "duration": 18.215,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 18.215,
        "charStart": 0,
        "charEnd": 209
      }
    ],
    "cues": []
  },
  "S16": {
    "audio": "audio/voice/voz_s16.mp3",
    "duration": 23.226,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 23.226,
        "charStart": 0,
        "charEnd": 270
      }
    ],
    "cues": []
  },
  "S17": {
    "audio": "audio/voice/voz_s17.mp3",
    "duration": 16.098,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 16.098,
        "charStart": 0,
        "charEnd": 232
      }
    ],
    "cues": []
  },
  "S18": {
    "audio": "audio/voice/voz_s18.mp3",
    "duration": 17.689,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 17.689,
        "charStart": 0,
        "charEnd": 232
      }
    ],
    "cues": []
  },
  "S19": {
    "audio": "audio/voice/voz_s19.mp3",
    "duration": 19.365,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 19.365,
        "charStart": 0,
        "charEnd": 262
      }
    ],
    "cues": []
  },
  "S20": {
    "audio": "audio/voice/voz_s20.mp3",
    "duration": 20.032,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 20.032,
        "charStart": 0,
        "charEnd": 306
      }
    ],
    "cues": []
  },
  "S21": {
    "audio": "audio/voice/voz_s21.mp3",
    "duration": 18.674,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 18.674,
        "charStart": 0,
        "charEnd": 241
      }
    ],
    "cues": []
  },
  "S22": {
    "audio": "audio/voice/voz_s22.mp3",
    "duration": 22.936,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 22.936,
        "charStart": 0,
        "charEnd": 288
      }
    ],
    "cues": []
  },
  "S23": {
    "audio": "audio/voice/voz_s23.mp3",
    "duration": 20.188,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 20.188,
        "charStart": 0,
        "charEnd": 252
      }
    ],
    "cues": []
  },
  "S24": {
    "audio": "audio/voice/voz_s24.mp3",
    "duration": 18.749,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 18.749,
        "charStart": 0,
        "charEnd": 230
      }
    ],
    "cues": []
  },
  "S25": {
    "audio": "audio/voice/voz_s25.mp3",
    "duration": 22.135,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 22.135,
        "charStart": 0,
        "charEnd": 284
      }
    ],
    "cues": []
  },
  "S26": {
    "audio": "audio/voice/voz_s26.mp3",
    "duration": 14.308,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 14.308,
        "charStart": 0,
        "charEnd": 205
      }
    ],
    "cues": []
  },
  "S27": {
    "audio": "audio/voice/voz_s27.mp3",
    "duration": 18.479,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 18.479,
        "charStart": 0,
        "charEnd": 272
      }
    ],
    "cues": []
  },
  "S28": {
    "audio": "audio/voice/voz_s28.mp3",
    "duration": 28.146,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 28.146,
        "charStart": 0,
        "charEnd": 338
      }
    ],
    "cues": []
  },
  "S29": {
    "audio": "audio/voice/voz_s29.mp3",
    "duration": 15.254,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 15.254,
        "charStart": 0,
        "charEnd": 225
      }
    ],
    "cues": []
  },
  "S30": {
    "audio": "audio/voice/voz_s30.mp3",
    "duration": 11.466,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 11.466,
        "charStart": 0,
        "charEnd": 182
      }
    ],
    "cues": []
  },
  "S31": {
    "audio": "audio/voice/voz_s31.mp3",
    "duration": 13.671,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 13.671,
        "charStart": 0,
        "charEnd": 227
      }
    ],
    "cues": []
  },
  "S32": {
    "audio": "audio/voice/voz_s32.mp3",
    "duration": 28.118,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 28.118,
        "charStart": 0,
        "charEnd": 267
      }
    ],
    "cues": []
  },
  "S33": {
    "audio": "audio/voice/voz_s33.mp3",
    "duration": 20.641,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 20.641,
        "charStart": 0,
        "charEnd": 222
      }
    ],
    "cues": []
  },
  "S34": {
    "audio": "audio/voice/voz_s34.mp3",
    "duration": 9.7,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 9.7,
        "charStart": 0,
        "charEnd": 195
      }
    ],
    "cues": []
  },
  "S35": {
    "audio": "audio/voice/voz_s35.mp3",
    "duration": 16.126,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 16.126,
        "charStart": 0,
        "charEnd": 246
      }
    ],
    "cues": []
  },
  "S36": {
    "audio": "audio/voice/voz_s36.mp3",
    "duration": 17.372,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 17.372,
        "charStart": 0,
        "charEnd": 259
      }
    ],
    "cues": []
  },
  "S37": {
    "audio": "audio/voice/voz_s37.mp3",
    "duration": 21.712,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 7.86,
        "charStart": 0,
        "charEnd": 98
      },
      {
        "start": 7.86,
        "end": 15.16,
        "charStart": 98,
        "charEnd": 181
      },
      {
        "start": 15.16,
        "end": 21.712,
        "charStart": 181,
        "charEnd": 272
      }
    ],
    "cues": []
  },
  "S38": {
    "audio": "audio/voice/voz_s38.mp3",
    "duration": 15.35,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 15.35,
        "charStart": 0,
        "charEnd": 242
      }
    ],
    "cues": []
  },
  "S39": {
    "audio": "audio/voice/voz_s39.mp3",
    "duration": 13.034,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 13.034,
        "charStart": 0,
        "charEnd": 188
      }
    ],
    "cues": []
  },
  "S40": {
    "audio": "audio/voice/voz_s40.mp3",
    "duration": 21.638,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 10.84,
        "charStart": 0,
        "charEnd": 135
      },
      {
        "start": 10.84,
        "end": 21.638,
        "charStart": 135,
        "charEnd": 266
      }
    ],
    "cues": []
  },
  "S41": {
    "audio": "audio/voice/voz_s41.mp3",
    "duration": 22.396,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 11.16,
        "charStart": 0,
        "charEnd": 135
      },
      {
        "start": 11.16,
        "end": 22.396,
        "charStart": 135,
        "charEnd": 288
      }
    ],
    "cues": []
  },
  "S42": {
    "audio": "audio/voice/voz_s42.mp3",
    "duration": 22.258,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 8.78,
        "charStart": 0,
        "charEnd": 105
      },
      {
        "start": 8.78,
        "end": 22.258,
        "charStart": 105,
        "charEnd": 231
      }
    ],
    "cues": []
  },
  "S43": {
    "audio": "audio/voice/voz_s43.mp3",
    "duration": 33.683,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 10.4,
        "charStart": 0,
        "charEnd": 135
      },
      {
        "start": 10.4,
        "end": 33.683,
        "charStart": 135,
        "charEnd": 331
      }
    ],
    "cues": []
  },
  "S44": {
    "audio": "audio/voice/voz_s44.mp3",
    "duration": 15.203,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 5.26,
        "charStart": 0,
        "charEnd": 91
      },
      {
        "start": 5.26,
        "end": 15.203,
        "charStart": 91,
        "charEnd": 194
      }
    ],
    "cues": []
  },
  "S45": {
    "audio": "audio/voice/voz_s45.mp3",
    "duration": 19.424,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 10.24,
        "charStart": 0,
        "charEnd": 146
      },
      {
        "start": 10.24,
        "end": 19.424,
        "charStart": 146,
        "charEnd": 277
      }
    ],
    "cues": []
  },
  "S46": {
    "audio": "audio/voice/voz_s46.mp3",
    "duration": 19.362,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 19.362,
        "charStart": 0,
        "charEnd": 236
      }
    ],
    "cues": []
  },
  "S47": {
    "audio": "audio/voice/voz_s47.mp3",
    "duration": 23.155,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 23.155,
        "charStart": 0,
        "charEnd": 281
      }
    ],
    "cues": []
  },
  "S48": {
    "audio": "audio/voice/voz_s48.mp3",
    "duration": 21.27,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 21.27,
        "charStart": 0,
        "charEnd": 249
      }
    ],
    "cues": []
  },
  "S49": {
    "audio": "audio/voice/voz_s49.mp3",
    "duration": 21.33,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 21.33,
        "charStart": 0,
        "charEnd": 263
      }
    ],
    "cues": []
  },
  "S50": {
    "audio": "audio/voice/voz_s50.mp3",
    "duration": 22.877,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0.0,
        "end": 22.877,
        "charStart": 0,
        "charEnd": 251
      }
    ],
    "cues": []
  },
  "S51": {
    "audio": "audio/voice/voz_s51.mp3",
    "duration": 20.762,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 20.762,
        "charStart": 0,
        "charEnd": 256
      }
    ],
    "cues": []
  },
  "S52": {
    "audio": "audio/voice/voz_s52.mp3",
    "duration": 25.362,
    "startDelayMs": 200,
    "segments": [
      {
        "start": 0,
        "end": 25.362,
        "charStart": 0,
        "charEnd": 295
      }
    ],
    "cues": []
  }
};
