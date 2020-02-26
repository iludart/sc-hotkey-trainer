var sequences = [
    // {
    //     "text": "PvZ Select Corsairs",
    //     "sequence": "1"
    // },
    // {
    //     "text": "PvZ Go to Corsairs",
    //     "sequence": "11"
    // },
    // {
    //     "text": "PvZ Select Zealots",
    //     "sequence": "2"
    // },
    // {
    //     "text": "PvZ Go to Zealots",
    //     "sequence": "22"
    // },
    // {
    //     "text": "PvZ Select Dragoons",
    //     "sequence": "3"
    // },
    // {
    //     "text": "PvZ Go to Dragoons",
    //     "sequence": "33"
    // },
    // {
    //     "text": "PvZ Select Mixed",
    //     "sequence": "4"
    // },
    // {
    //     "text": "PvZ Select Observers",
    //     "sequence": "5"
    // },
    // {
    //     "text": "PvZ Go to Observers",
    //     "sequence": "55"
    // },
    // {
    //     "text": "Select Nexus",
    //     "sequence": "5"
    // },
    // {
    //     "text": "Go to Nexus",
    //     "sequence": "55"
    // },
    // {
    //     "text": "Select Gateway",
    //     "sequence": "6"
    // },
    // {
    //     "text": "Go to Gateway",
    //     "sequence": "66"
    // },
    // {
    //     "text": "Attack with 1 group",
    //     "sequence": "1r"
    // },
    // {
    //     "text": "Attack with 2 groups",
    //     "sequence": "1r2r"
    // },
    // {
    //     "text": "Attack with 5 groups",
    //     "sequence": "1r2r3r4r5r"
    // },
    // {
    //     "text": "Cycle 5 army groups",
    //     "sequence": "12345"
    // },
    // {
    //     "text": "Recall",
    //     "sequence": "w"
    // },
    // {
    //     "text": "Storm",
    //     "sequence": "w"
    // },
    // {
    //     "text": "Stasis",
    //     "sequence": "e"
    // },
    // {
    //     "text": "Morph Archons",
    //     "sequence": "t"
    // },


    // {
    //     "text": "36",
    //     "sequence": "36"
    // },
    // {
    //     "text": "36 Observer",
    //     "sequence": "363t"
    // },    
    // {
    //     "text": "36 Zealot",
    //     "sequence": "36w",
    //     "alt": "366w"
    // },
    // {
    //     "text": "3456 Observer",
    //     "sequence": "34563t"
    // },    
    // {
    //     "text": "3456",
    //     "sequence": "3456"
    // },
    // {
    //     "text": "3456, 2P, 3Z, 1 Obs",
    //     "sequence": "34565t4t6w7w8w3t"
    // },
    // {
    //     "text": "3456, 2P, 1 Obs, 3Z",
    //     "sequence": "34565t4t3t6w7w8w"
    // },
    // {
    //     "text": "3456, 3Z, 2P, 1 Obs",
    //     "sequence": "3456w7w8w5t4t3t",
    // },
    // {
    //     "text": "3456, 3Z, 1 Obs, 2P",
    //     "sequence": "3456w7w8w3t4t5t",
    // },
    // {
    //     "text": "3456, 1 Obs, 2P, 3Z",
    //     "sequence": "34563t4t5t6w7w8w"
    // },
    {
        "text": "3456, 1 Obs, 3Z, 2P",
        "sequence": "34563t6w7w8w5t4t"
    },
    // {
    //     "text": "3t6w",
    //     "sequence": "3t6w",
    // },


    // --------- BUILD UNITS ---------

    // {
    //     "text": "Build Probe",
    //     "sequence": "5t"
    // }, 
    // {
    //     "text": "Build 2 Probes",
    //     "sequence": "5t4t"
    // }, 
    // {
    //     "text": "Build Observer",
    //     "sequence": "3t"
    // },  
    // {
    //     "text": "Build Corsair",
    //     "sequence": "3w"
    // },
    // {
    //     "text": "Build 3 Dragoons",
    //     "sequence": "6e7e8e"
    // }, 
    // {
    //     "text": "Build 3 Zealots",
    //     "sequence": "6w7w8w"
    // }, 
    // {
    //     "text": "Build 2 DTs",
    //     "sequence": "6d7d"
    // }, 
    // {
    //     "text": "Build 2 HTs",
    //     "sequence": "6s7s"
    // },


    // --------- CTRL MODIFIER ---------

    // {
    //     "text": "Bind group 1",
    //     "sequence": "1",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind group 2",
    //     "sequence": "2",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind group 3",
    //     "sequence": "3",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind group 4",
    //     "sequence": "4",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind Second Nexus",
    //     "sequence": "4",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind group 5",
    //     "sequence": "5",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind First Nexus",
    //     "sequence": "5",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "Bind 1st Gateway",
    //     "sequence": "6",
    //     "modifier": "CTRL"
    // },    
    // {
    //     "text": "Bind 1st Gateway",
    //     "sequence": "6",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "1 Gateway, Go to 2",
    //     "sequence": "7",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "1 Gateway, Go to 3",
    //     "sequence": "78",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "1 Gateway, Go to 4",
    //     "sequence": "789",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "1 Gateway, Go to 5",
    //     "sequence": "7890",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "2 Gateways, Go to 3",
    //     "sequence": "8",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "2 Gateways, Go to 4",
    //     "sequence": "89",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "2 Gateways, Go to 5",
    //     "sequence": "890",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "3 Gateways, Go to 4",
    //     "sequence": "9",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "3 Gateways, Go to 5",
    //     "sequence": "90",
    //     "modifier": "CTRL"
    // },
    // {
    //     "text": "4 Gateways, Go to 5",
    //     "sequence": "0",
    //     "modifier": "CTRL"
    // },

    // --------- SHIFT MODIFIER ---------

    // {
    //     "text": "Shift add to Group 1",
    //     "sequence": "1",
    //     "modifier": "SHIFT"
    // },
    // {
    //     "text": "Shift add to Group 2",
    //     "sequence": "2",
    //     "modifier": "SHIFT"
    // },
    // {
    //     "text": "Shift add to Group 3",
    //     "sequence": "3",
    //     "modifier": "SHIFT"
    // },
    // {
    //     "text": "Shift add to Group 4",
    //     "sequence": "4",
    //     "modifier": "SHIFT"
    // },
    // {
    //     "text": "Shift add to Group 5",
    //     "sequence": "5",
    //     "modifier": "SHIFT"
    // }
]
