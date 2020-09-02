


const serviceType = {
    Oilandfilter : {
        icon: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Change Oil and Filter'
    },
    Brakepads : {
        icon: 'https://img.icons8.com/windows/32/000000/press-break-pedal.png',
        name: 'Brake Pads'
    },
    Batteryreplacement : {
        icon: 'https://img.icons8.com/ios/50/000000/car-battery.png',
        name: 'Battery Replacement'
    },
    Sparkplug : {
        icon: 'https://img.icons8.com/ios/50/000000/spark-plug.png',
        name: 'Spark Plug Replacement'
    },
    Alternator : {
        icon: 'https://img.icons8.com/windows/32/000000/gears.png',
        name: 'Alternator Replacement'
    },
    Starter : {
        icon: 'https://img.icons8.com/metro/26/000000/replace.png',
        name: 'Starter Replacement'
    },
    Fuelpump : {
        icon: 'https://img.icons8.com/material-outlined/24/000000/gas-pump.png',
        name: 'Fuel Pump Replacement'
    },
    Paintremoval : {
        icon: 'https://img.icons8.com/ios/50/000000/cleanup-edges.png',
        name: 'Paint Removal'
    },
    Paint : {
        icon: 'https://img.icons8.com/pastel-glyph/64/000000/roller-brush.png',
        name: 'Paint'
    },
    Custompattern : {
        icon: 'https://img.icons8.com/ios/50/000000/customize-view.png',
        name: 'Custom Pattern'
    },
    Tirechange : {
        icon: 'https://img.icons8.com/dotty/80/000000/flat-tire.png',
        name: 'Tire Change'
    },
}

let {Oilandfilter, Brakepads, Batteryreplacement, 
    Starter, Fuelpump, Alternator, Sparkplug, Paintremoval, Paint, Custompattern, Tirechange} = serviceType
let fakeData = { 

    "Services": {
        "CYCLES": [
            Oilandfilter,
            Brakepads,
            Batteryreplacement,
            Starter,
            Fuelpump,
            Alternator,
            Sparkplug,
            Tirechange
        ],
        "ATV": [
            Oilandfilter,
            Brakepads,
            Batteryreplacement,
            Starter,
            Fuelpump,
            Alternator,
            Sparkplug,
            Tirechange
        ],
        "HYDROGRAPHICS": {
            Paint,
            Paintremoval,
            Custompattern
        }  
    }
}


export default fakeData