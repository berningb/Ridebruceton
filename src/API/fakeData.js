import cycle from '../Assets/garage3.JPG'
import atv from '../Assets/atv.jpg'
import golf from '../Assets/golf.jpg'



import merch1 from '../Assets/merch1.JPG'
import merch2 from '../Assets/merch2.JPG'
import merch3 from '../Assets/merch3.JPG'
import merch4 from '../Assets/merch4.JPG'
import merch5 from '../Assets/merch5.JPG'
import merch6 from '../Assets/merch6.JPG'
import merch7 from '../Assets/merch7.JPG'
import merch8 from '../Assets/merch8.JPG'

const fakeData = {
    Oilandfilter : {
        name: 'Oil Change',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."
    },
    EngineRepair : {
        name: 'Engine repair',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Batteryreplacement : {
        name: 'Replace Battery',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Repair : {
        name: 'Basic Repair',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Power : {
        name: 'Power',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Suspension : {
        name: 'Suspension',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Upgrades : {
        name: 'Upgrades',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    ExhaustSystem : {
        name: 'Exhaust System',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Diagnosis : {
        name: 'Diagnosis',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Electrical : {
        name: 'Electrical',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Tirechange : {
        name: 'Tire Change',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
}





let { Oilandfilter, EngineRepair, Suspension, Repair, 
    Power, Batteryreplacement, Diagnosis, ExhaustSystem, Upgrades, 
    Electrical, Tirechange } = fakeData

const services = [
    Oilandfilter,
    EngineRepair,
    Batteryreplacement, 
    Repair, 
    Power, 
    Suspension, 
    Upgrades, 
    ExhaustSystem,
    Diagnosis, 
    Electrical, 
    Tirechange
]

let vehicleTypes = [ 
    {
        "Image": cycle,
        "Name": 'Cycles | V-Twin & Metric',
        "Options": [
            Oilandfilter,
            Batteryreplacement,
            EngineRepair,
            Repair,
            Electrical,
            Upgrades,
            Tirechange,
            ExhaustSystem,
            Diagnosis
        ]
    },{
        "Image": golf,
        "Name": 'Golf Cart',
        "Options": [
            Oilandfilter,
            Batteryreplacement,
            Power,
            Tirechange
        ]
    },{
        "Image": atv,
        "Name": 'ATV',
        "Options": [
            Oilandfilter,
            Batteryreplacement,
            Tirechange,
            Suspension
        ]
    }
]


let merch = [ 
    {
        "image": merch1,
    },{
        "image": merch2,
    },{
        "image": merch3,
    },{
        "image": merch4,
    },{
        "image": merch5,
    },{
        "image": merch6,
    },{
        "image": merch7,
    },{
        "image": merch8,
    }
]

export default {vehicleTypes, services, merch}