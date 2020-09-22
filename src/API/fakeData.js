import cycle from '../Assets/cycle.jpg'
import atv from '../Assets/atv.jpg'
import golf from '../Assets/golf.jpg'

const fakeData = {
    Oilandfilter : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Oil Change',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."
    },
    EngineRepair : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Engine repair',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Batteryreplacement : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Replace Battery',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Repair : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Basic Repair',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Power : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Power',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Suspension : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Suspension',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Upgrades : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Upgrades',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    ExhaustSystem : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Exhaust System',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Diagnosis : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Diagnosis',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Electrical : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
        name: 'Electrical',
        text: "To keep your bike running properly at all times, we offer a number of services in the Kent area that are carried out by our certified, expert service and repair technicians who have years of experience performing everything from oil changes to a complete engine overhaul. We use high-tech diagnostic equipment to guarantee your bike is repaired and/or serviced correctly the first time around, and we only use the highest quality replacement parts, filters, oils, and components when it comes to your car."

    },
    Tirechange : {
        image: 'https://img.icons8.com/windows/32/000000/engine-oil-level.png',
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
        "Name": 'Cycles',
        "Services": [
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
        "Services": [
            Oilandfilter,
            Batteryreplacement,
            Power,
            Tirechange
        ]
    },{
        "Image": atv,
        "Name": 'ATV',
        "Services": [
            Oilandfilter,
            Batteryreplacement,
            Tirechange,
            Suspension
        ]
    }
]


export default {vehicleTypes, services}