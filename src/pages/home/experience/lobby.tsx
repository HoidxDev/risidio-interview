import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { postersBottom, postersTop } from '../../../utils/data/posters-constant'
import { Poster } from './poster'
import store from '../../../store'

type GLTFResult = GLTF & {
    nodes: {
        all_static_objects012: THREE.Mesh
        all_static_objects012_1: THREE.Mesh
        Cube131_1: THREE.Mesh
        Cube131_2: THREE.Mesh
        Cube131_3: THREE.Mesh
        Cube132_1: THREE.Mesh
        Cube132_2: THREE.Mesh
        TCom_ArtDecoSet03_03001: THREE.Mesh
        TCom_ArtDecoSet03_03: THREE.Mesh
        TCom_ArtDecoSet01_01006: THREE.Mesh
        TCom_ArtDecoSet01_01006_1: THREE.Mesh
        Plane019: THREE.Mesh
        Plane022: THREE.Mesh
        Plane024: THREE.Mesh
        Plane025: THREE.Mesh
        Plane027: THREE.Mesh
        Plane028: THREE.Mesh
        Cube134_1: THREE.Mesh
        Cube134_2: THREE.Mesh
        Cube134_3: THREE.Mesh
        Cube134_4: THREE.Mesh
        Cube134_5: THREE.Mesh
        Cube135_1: THREE.Mesh
        Cube135_2: THREE.Mesh
        Cube136: THREE.Mesh
        Cube136_1: THREE.Mesh
        Cube137: THREE.Mesh
        Cube137_1: THREE.Mesh
        Cube099: THREE.Mesh
        Cube098: THREE.Mesh
        Cube097: THREE.Mesh
        Cube096: THREE.Mesh
        Cube144: THREE.Mesh
        Cube144_1: THREE.Mesh
        Cube145: THREE.Mesh
        Cube145_1: THREE.Mesh
        Cube146: THREE.Mesh
        Cube146_1: THREE.Mesh
        Cube147: THREE.Mesh
        Cube147_1: THREE.Mesh
        Cube148: THREE.Mesh
        Cube148_1: THREE.Mesh
        Cube079: THREE.Mesh
        Cube078: THREE.Mesh
        Cube077: THREE.Mesh
        Cube074: THREE.Mesh
        Cube073: THREE.Mesh
        Cube072: THREE.Mesh
        Cube071: THREE.Mesh
        Cube070: THREE.Mesh
        Cube069: THREE.Mesh
        Cube068: THREE.Mesh
        Cube067: THREE.Mesh
        Cube066: THREE.Mesh
        Cube065: THREE.Mesh
        Cube062: THREE.Mesh
        Cube061: THREE.Mesh
        Cube060: THREE.Mesh
        Cube059: THREE.Mesh
        Cube058: THREE.Mesh
        Cube057: THREE.Mesh
        Cube056: THREE.Mesh
        Cube055: THREE.Mesh
        Cube054: THREE.Mesh
        Cube053: THREE.Mesh
        Cube052: THREE.Mesh
        Cube051: THREE.Mesh
        Cube050: THREE.Mesh
        Cube049: THREE.Mesh
        Cube048: THREE.Mesh
        Cube047: THREE.Mesh
        Cube046: THREE.Mesh
        Cube045: THREE.Mesh
        Cube044: THREE.Mesh
        Cube043: THREE.Mesh
        Cube042: THREE.Mesh
        Cube041: THREE.Mesh
        Cube040: THREE.Mesh
        Cube039: THREE.Mesh
        Cube038: THREE.Mesh
        Cube037: THREE.Mesh
        Cube036: THREE.Mesh
        Cube035: THREE.Mesh
        Cube034: THREE.Mesh
        Cube033: THREE.Mesh
        Cube032: THREE.Mesh
        Cube209: THREE.Mesh
        Cube209_1: THREE.Mesh
        Cube214: THREE.Mesh
        Cube214_1: THREE.Mesh
        Cube218: THREE.Mesh
        Cube218_1: THREE.Mesh
        Cube219: THREE.Mesh
        Cube219_1: THREE.Mesh
        Cube028: THREE.Mesh
        Cube222: THREE.Mesh
        Cube222_1: THREE.Mesh
        Cube224: THREE.Mesh
        Cube224_1: THREE.Mesh
        Cube107: THREE.Mesh
        Cube108: THREE.Mesh
        Cube229: THREE.Mesh
        Cube229_1: THREE.Mesh
        Cube229_2: THREE.Mesh
        Cube229_3: THREE.Mesh
        Cube230: THREE.Mesh
        Cube230_1: THREE.Mesh
        Cube231: THREE.Mesh
        Cube231_1: THREE.Mesh
        Cube112: THREE.Mesh
        Circle012: THREE.Mesh
        Circle011: THREE.Mesh
        Circle010: THREE.Mesh
        Circle009: THREE.Mesh
        Circle008: THREE.Mesh
        Circle007: THREE.Mesh
        Circle006: THREE.Mesh
        Circle005: THREE.Mesh
        Circle004: THREE.Mesh
        Circle003: THREE.Mesh
        Circle002: THREE.Mesh
        Circle001: THREE.Mesh
        Bottom_layer007: THREE.Mesh
        Cube235: THREE.Mesh
        Cube235_1: THREE.Mesh
        Bottom_layer004: THREE.Mesh
        Bottom_layer003: THREE.Mesh
        Cube238: THREE.Mesh
        Cube238_1: THREE.Mesh
        Cube238_2: THREE.Mesh
        Bevelling: THREE.Mesh
        Cube239: THREE.Mesh
        Cube239_1: THREE.Mesh
        Cube240: THREE.Mesh
        Cube240_1: THREE.Mesh
        middle_layer004: THREE.Mesh
        middle_layer001: THREE.Mesh
        middle_layer005: THREE.Mesh
        middle_layer006: THREE.Mesh
        Bottom_layer006: THREE.Mesh
        Plane016: THREE.Mesh
        Plane018: THREE.Mesh
        Plane020: THREE.Mesh
        Plane021: THREE.Mesh
        Plane023: THREE.Mesh
        Plane026: THREE.Mesh
        Plane029: THREE.Mesh
        Plane030: THREE.Mesh
        Plane031: THREE.Mesh
        Plane032: THREE.Mesh
        Plane033: THREE.Mesh
        Plane034: THREE.Mesh
        Plane036: THREE.Mesh
        middle_layer007: THREE.Mesh
        middle_layer008: THREE.Mesh
        Plane037: THREE.Mesh
        Cube123: THREE.Mesh
        Cube124: THREE.Mesh
        Cube127: THREE.Mesh
        Cube128: THREE.Mesh
        all_static_objects001: THREE.Mesh
        all_static_objects001_1: THREE.Mesh
        all_static_objects001_2: THREE.Mesh
        all_static_objects001_3: THREE.Mesh
        all_static_objects064: THREE.Mesh
        all_static_objects064_1: THREE.Mesh
        all_static_objects050: THREE.Mesh
        all_static_objects050_1: THREE.Mesh
        all_static_objects050_2: THREE.Mesh
        all_static_objects050_3: THREE.Mesh
        all_static_objects003: THREE.Mesh
        all_static_objects003_1: THREE.Mesh
        lobby_all_static_objects004: THREE.Mesh
        lobby_all_static_objects005: THREE.Mesh
        lobby_all_static_objects008: THREE.Mesh
        all_static_objects021: THREE.Mesh
        all_static_objects021_1: THREE.Mesh
        lobby_all_static_objects009: THREE.Mesh
        all_static_objects023: THREE.Mesh
        all_static_objects023_1: THREE.Mesh
        all_static_objects023_2: THREE.Mesh
        lobby_all_static_objects012: THREE.Mesh
        lobby_all_static_objects006: THREE.Mesh
        lobby_all_static_objects013: THREE.Mesh
        lobby_all_static_objects014: THREE.Mesh
        lobby_all_static_objects015: THREE.Mesh
        all_static_objects028: THREE.Mesh
        all_static_objects028_1: THREE.Mesh
        all_static_objects028_2: THREE.Mesh
        all_static_objects030: THREE.Mesh
        all_static_objects030_1: THREE.Mesh
        all_static_objects030_2: THREE.Mesh
        all_static_objects032: THREE.Mesh
        all_static_objects032_1: THREE.Mesh
        all_static_objects032_2: THREE.Mesh
        all_static_objects033: THREE.Mesh
        all_static_objects033_1: THREE.Mesh
        all_static_objects033_2: THREE.Mesh
        lobby_all_static_objects020: THREE.Mesh
        lobby_all_static_objects051: THREE.Mesh
        lobby_all_static_objects059: THREE.Mesh
        all_static_objects004: THREE.Mesh
        all_static_objects004_1: THREE.Mesh
        all_static_objects004_2: THREE.Mesh
        all_static_objects004_3: THREE.Mesh
        all_static_objects006: THREE.Mesh
        all_static_objects006_1: THREE.Mesh
        all_static_objects006_2: THREE.Mesh
        all_static_objects006_3: THREE.Mesh
        all_static_objects007: THREE.Mesh
        all_static_objects007_1: THREE.Mesh
        all_static_objects007_2: THREE.Mesh
        all_static_objects007_3: THREE.Mesh
        all_static_objects008: THREE.Mesh
        all_static_objects008_1: THREE.Mesh
        all_static_objects008_2: THREE.Mesh
        all_static_objects008_3: THREE.Mesh
        all_static_objects010: THREE.Mesh
        all_static_objects010_1: THREE.Mesh
        all_static_objects010_2: THREE.Mesh
        all_static_objects010_3: THREE.Mesh
        all_static_objects009: THREE.Mesh
        all_static_objects009_1: THREE.Mesh
        all_static_objects009_2: THREE.Mesh
        all_static_objects009_3: THREE.Mesh
        all_static_objects011: THREE.Mesh
        all_static_objects011_1: THREE.Mesh
        all_static_objects011_2: THREE.Mesh
        all_static_objects011_3: THREE.Mesh
        all_static_objects005: THREE.Mesh
        all_static_objects005_1: THREE.Mesh
        all_static_objects005_2: THREE.Mesh
        all_static_objects005_3: THREE.Mesh
        all_static_objects079: THREE.Mesh
        all_static_objects079_1: THREE.Mesh
        all_static_objects079_2: THREE.Mesh
        all_static_objects079_3: THREE.Mesh
        all_static_objects042: THREE.Mesh
        all_static_objects042_1: THREE.Mesh
        all_static_objects042_2: THREE.Mesh
        all_static_objects042_3: THREE.Mesh
        all_static_objects045: THREE.Mesh
        all_static_objects045_1: THREE.Mesh
        all_static_objects045_2: THREE.Mesh
        all_static_objects045_3: THREE.Mesh
        walkable_paths: THREE.Mesh
        walkable_paths_1: THREE.Mesh
        lobby_walkable_paths002: THREE.Mesh
        all_static_objects: THREE.Mesh
        all_static_objects_1: THREE.Mesh
        all_static_objects_2: THREE.Mesh
        all_static_objects_3: THREE.Mesh
        all_static_objects_4: THREE.Mesh
        all_static_objects_5: THREE.Mesh
        all_static_objects_6: THREE.Mesh
        all_static_objects_7: THREE.Mesh
        all_static_objects_8: THREE.Mesh
        all_static_objects_9: THREE.Mesh
        all_static_objects048: THREE.Mesh
        all_static_objects048_1: THREE.Mesh
        all_static_objects048_2: THREE.Mesh
        all_static_objects048_3: THREE.Mesh
        all_static_objects048_4: THREE.Mesh
        all_static_objects049: THREE.Mesh
        all_static_objects049_1: THREE.Mesh
        all_static_objects054: THREE.Mesh
        all_static_objects054_1: THREE.Mesh
        lobby_all_static_objects054: THREE.Mesh
        lobby_all_static_objects058: THREE.Mesh
        ['21jumpStreet_interaction_v1']: THREE.Mesh
        backToFuture_interaction_v1: THREE.Mesh
        badBoys_interaction_v1: THREE.Mesh
        bohemianRhapsody_interaction_v1: THREE.Mesh
        fordVFerrari_interaction_v1: THREE.Mesh
        gunShy_interaction_v1: THREE.Mesh
        interstellar_interaction_v1: THREE.Mesh
        kolya_interaction_v1: THREE.Mesh
        lebanon_interaction_v1: THREE.Mesh
        likeWater4Chocolate_interaction_v1: THREE.Mesh
        madMaxFuryRoad_interaction_v1: THREE.Mesh
        manOnFire_interaction_v1: THREE.Mesh
        ['mr&MrsSmith_interaction_v1']: THREE.Mesh
        scriptBoard_interaction_v1: THREE.Mesh
        theGodfather_interaction_v1: THREE.Mesh
        theShining_interaction_v1: THREE.Mesh
        Cube065_1: THREE.Mesh
        Cube065_2: THREE.Mesh
        Us_movei_poster: THREE.Mesh
        blade_runner: THREE.Mesh
        Cube129: THREE.Mesh
        Cube070_1: THREE.Mesh
        Cube070_2: THREE.Mesh
        the_big_lebowski: THREE.Mesh
        planet_of_the_apes: THREE.Mesh
        lobby_walkable_paths001: THREE.Mesh
        all_static_objects037: THREE.Mesh
        all_static_objects037_1: THREE.Mesh
        Plane010: THREE.Mesh
        Plane013: THREE.Mesh
        Plane045: THREE.Mesh
        Plane046: THREE.Mesh
        Plane047: THREE.Mesh
        Plane048: THREE.Mesh
        Plane049: THREE.Mesh
        Plane050: THREE.Mesh
        Plane051: THREE.Mesh
        empire_strikes_back: THREE.Mesh
        ['fear_&_loathing']: THREE.Mesh
        Plane069: THREE.Mesh
        Plane070: THREE.Mesh
        all_static_objects036: THREE.Mesh
        all_static_objects036_1: THREE.Mesh
        all_static_objects039: THREE.Mesh
        all_static_objects039_1: THREE.Mesh
        all_static_objects038: THREE.Mesh
        all_static_objects038_1: THREE.Mesh
        all_static_objects044: THREE.Mesh
        all_static_objects044_1: THREE.Mesh
        all_static_objects044_2: THREE.Mesh
        all_static_objects051: THREE.Mesh
        all_static_objects051_1: THREE.Mesh
        all_static_objects053: THREE.Mesh
        all_static_objects053_1: THREE.Mesh
        all_static_objects056: THREE.Mesh
        all_static_objects056_1: THREE.Mesh
        all_static_objects070: THREE.Mesh
        all_static_objects070_1: THREE.Mesh
        all_static_objects073: THREE.Mesh
        all_static_objects073_1: THREE.Mesh
        all_static_objects013: THREE.Mesh
        all_static_objects013_1: THREE.Mesh
        all_static_objects013_2: THREE.Mesh
        all_static_objects043: THREE.Mesh
        all_static_objects043_1: THREE.Mesh
        all_static_objects043_2: THREE.Mesh
        all_static_objects020: THREE.Mesh
        all_static_objects020_1: THREE.Mesh
        all_static_objects024: THREE.Mesh
        all_static_objects024_1: THREE.Mesh
        all_static_objects029: THREE.Mesh
        all_static_objects029_1: THREE.Mesh
        all_static_objects029_2: THREE.Mesh
        all_static_objects072: THREE.Mesh
        all_static_objects072_1: THREE.Mesh
        all_static_objects072_2: THREE.Mesh
        lobby_all_static_objects063: THREE.Mesh
        all_static_objects040: THREE.Mesh
        all_static_objects040_1: THREE.Mesh
        all_static_objects040_2: THREE.Mesh
        all_static_objects046: THREE.Mesh
        all_static_objects046_1: THREE.Mesh
        lobby_all_static_objects034: THREE.Mesh
        all_static_objects052: THREE.Mesh
        all_static_objects052_1: THREE.Mesh
        all_static_objects057: THREE.Mesh
        all_static_objects057_1: THREE.Mesh
        all_static_objects057_2: THREE.Mesh
        elevator_interaction_v1_1: THREE.Mesh
        elevator_interaction_v1_2: THREE.Mesh
        elevator_interaction_v1_3: THREE.Mesh
        all_static_objects063: THREE.Mesh
        all_static_objects063_1: THREE.Mesh
        all_static_objects068: THREE.Mesh
        all_static_objects068_1: THREE.Mesh
        all_static_objects069: THREE.Mesh
        all_static_objects069_1: THREE.Mesh
        all_static_objects075: THREE.Mesh
        all_static_objects075_1: THREE.Mesh
        all_static_objects041: THREE.Mesh
        all_static_objects041_1: THREE.Mesh
        Simple_GP_Layer: THREE.Mesh
        Cube009_1: THREE.Mesh
        Cube009_2: THREE.Mesh
        Cube014_1: THREE.Mesh
        Cube014_2: THREE.Mesh
        Cube013_1: THREE.Mesh
        Cube013_2: THREE.Mesh
        Cylinder015: THREE.Mesh
        Cylinder004: THREE.Mesh
        Cylinder006: THREE.Mesh
        Cube: THREE.Mesh
        ['21-Jump-Street_interaction_posters_v1001']: THREE.Mesh
        ['Back-To-The-Future_interaction_posters_v1001']: THREE.Mesh
        ['Bad-Boys_interaction_posters_v1001']: THREE.Mesh
        Books001: THREE.Mesh
        Books001_1: THREE.Mesh
        Books002: THREE.Mesh
        Books002_1: THREE.Mesh
        Books003: THREE.Mesh
        Books003_1: THREE.Mesh
        Books004: THREE.Mesh
        Books004_1: THREE.Mesh
        Books005: THREE.Mesh
        Books005_1: THREE.Mesh
        Books046_1: THREE.Mesh
        Books046_2: THREE.Mesh
        Books047_1: THREE.Mesh
        Books047_2: THREE.Mesh
        Books023_1: THREE.Mesh
        Books023_2: THREE.Mesh
        Books024_1: THREE.Mesh
        Books024_2: THREE.Mesh
        Books053_1: THREE.Mesh
        Books053_2: THREE.Mesh
        Books054: THREE.Mesh
        Books054_1: THREE.Mesh
        Books055: THREE.Mesh
        Books055_1: THREE.Mesh
        Books056: THREE.Mesh
        Books056_1: THREE.Mesh
        Books057: THREE.Mesh
        Books057_1: THREE.Mesh
        Books058: THREE.Mesh
        Books058_1: THREE.Mesh
        Books059: THREE.Mesh
        Books059_1: THREE.Mesh
        Books060: THREE.Mesh
        Books060_1: THREE.Mesh
        Books025_1: THREE.Mesh
        Books025_2: THREE.Mesh
        Books026_1: THREE.Mesh
        Books026_2: THREE.Mesh
        Books027_1: THREE.Mesh
        Books027_2: THREE.Mesh
        Books028_1: THREE.Mesh
        Books028_2: THREE.Mesh
        Books029_1: THREE.Mesh
        Books029_2: THREE.Mesh
        Books030_1: THREE.Mesh
        Books030_2: THREE.Mesh
        Books031_1: THREE.Mesh
        Books031_2: THREE.Mesh
        Books032_1: THREE.Mesh
        Books032_2: THREE.Mesh
        Books033_1: THREE.Mesh
        Books033_2: THREE.Mesh
        Books040_1: THREE.Mesh
        Books040_2: THREE.Mesh
        Books041_1: THREE.Mesh
        Books041_2: THREE.Mesh
        Books042_1: THREE.Mesh
        Books042_2: THREE.Mesh
        Books043_1: THREE.Mesh
        Books043_2: THREE.Mesh
        Books044_1: THREE.Mesh
        Books044_2: THREE.Mesh
        Books045_1: THREE.Mesh
        Books045_2: THREE.Mesh
        Books048_1: THREE.Mesh
        Books048_2: THREE.Mesh
        Books049_1: THREE.Mesh
        Books049_2: THREE.Mesh
        Books050_1: THREE.Mesh
        Books050_2: THREE.Mesh
        Books051_1: THREE.Mesh
        Books051_2: THREE.Mesh
        Books052_1: THREE.Mesh
        Books052_2: THREE.Mesh
        Books061: THREE.Mesh
        Books061_1: THREE.Mesh
        Books062: THREE.Mesh
        Books062_1: THREE.Mesh
        Books063: THREE.Mesh
        Books063_1: THREE.Mesh
        Books064: THREE.Mesh
        Books064_1: THREE.Mesh
        Books065: THREE.Mesh
        Books065_1: THREE.Mesh
        Books066: THREE.Mesh
        Books066_1: THREE.Mesh
        Books067: THREE.Mesh
        Books067_1: THREE.Mesh
        Books068: THREE.Mesh
        Books068_1: THREE.Mesh
        Books069: THREE.Mesh
        Books069_1: THREE.Mesh
        Books070: THREE.Mesh
        Books070_1: THREE.Mesh
        Books071: THREE.Mesh
        Books071_1: THREE.Mesh
        carpet001: THREE.Mesh
        casset002: THREE.Mesh
        casset002_1: THREE.Mesh
        casset002_2: THREE.Mesh
        Chair_desk003: THREE.Mesh
        Chairs_model_002_1: THREE.Mesh
        Chairs_model_002_2: THREE.Mesh
        ['Computer&Mouse_interaction_v2004']: THREE.Mesh
        ['Computer&Mouse_interaction_v2004_1']: THREE.Mesh
        ['Computer&Mouse_interaction_v2005']: THREE.Mesh
        ['Computer&Mouse_interaction_v2005_1']: THREE.Mesh
        ['Computer&Mouse_interaction_v2006']: THREE.Mesh
        ['Computer&Mouse_interaction_v2006_1']: THREE.Mesh
        Cube062_1: THREE.Mesh
        Cube062_2: THREE.Mesh
        Cube069_1: THREE.Mesh
        Cube069_2: THREE.Mesh
        Cube004: THREE.Mesh
        Cube005: THREE.Mesh
        Cube006: THREE.Mesh
        Cube074_1: THREE.Mesh
        Cube074_2: THREE.Mesh
        Cube010: THREE.Mesh
        Cube095_1: THREE.Mesh
        Cube095_2: THREE.Mesh
        Cube012: THREE.Mesh
        Cube013: THREE.Mesh
        Cube014: THREE.Mesh
        Cube015: THREE.Mesh
        Cube016: THREE.Mesh
        Cube017: THREE.Mesh
        Cube019: THREE.Mesh
        Cube020: THREE.Mesh
        Cube021: THREE.Mesh
        Cube022: THREE.Mesh
        Cube024: THREE.Mesh
        Cube027: THREE.Mesh
        Cube030: THREE.Mesh
        Cube031: THREE.Mesh
        Cube063: THREE.Mesh
        Cube064: THREE.Mesh
        Cube075: THREE.Mesh
        Cube080: THREE.Mesh
        Cube081: THREE.Mesh
        Cube082: THREE.Mesh
        Cube083: THREE.Mesh
        Cube084: THREE.Mesh
        Cube085: THREE.Mesh
        Cube086: THREE.Mesh
        Cube087: THREE.Mesh
        Cube088: THREE.Mesh
        Cube089: THREE.Mesh
        Cube090: THREE.Mesh
        Cube076: THREE.Mesh
        Cube106_1: THREE.Mesh
        Cube106_2: THREE.Mesh
        Cube101: THREE.Mesh
        Cube105: THREE.Mesh
        Cube106: THREE.Mesh
        Cube113: THREE.Mesh
        Cube114: THREE.Mesh
        Cube131: THREE.Mesh
        Cube132: THREE.Mesh
        Cube133: THREE.Mesh
        Cube134: THREE.Mesh
        Cube135: THREE.Mesh
        Cylinder005: THREE.Mesh
        Cylinder007: THREE.Mesh
        Cylinder043: THREE.Mesh
        Cylinder043_1: THREE.Mesh
        Cylinder044: THREE.Mesh
        Cylinder044_1: THREE.Mesh
        Cylinder010: THREE.Mesh
        Cylinder046: THREE.Mesh
        Cylinder046_1: THREE.Mesh
        Cylinder012: THREE.Mesh
        Cylinder048: THREE.Mesh
        Cylinder048_1: THREE.Mesh
        Cylinder049: THREE.Mesh
        Cylinder049_1: THREE.Mesh
        Cylinder050: THREE.Mesh
        Cylinder050_1: THREE.Mesh
        Cylinder051: THREE.Mesh
        Cylinder051_1: THREE.Mesh
        Cylinder018: THREE.Mesh
        Cylinder019: THREE.Mesh
        Cylinder054: THREE.Mesh
        Cylinder054_1: THREE.Mesh
        Cylinder055: THREE.Mesh
        Cylinder055_1: THREE.Mesh
        Cylinder056: THREE.Mesh
        Cylinder056_1: THREE.Mesh
        Cylinder057: THREE.Mesh
        Cylinder057_1: THREE.Mesh
        Cylinder024: THREE.Mesh
        Cylinder025: THREE.Mesh
        Cylinder060: THREE.Mesh
        Cylinder060_1: THREE.Mesh
        Cylinder061: THREE.Mesh
        Cylinder061_1: THREE.Mesh
        Cylinder062: THREE.Mesh
        Cylinder062_1: THREE.Mesh
        Cylinder063: THREE.Mesh
        Cylinder063_1: THREE.Mesh
        Cylinder064: THREE.Mesh
        Cylinder064_1: THREE.Mesh
        Cylinder065: THREE.Mesh
        Cylinder065_1: THREE.Mesh
        Cylinder032: THREE.Mesh
        Cylinder033: THREE.Mesh
        Cylinder034: THREE.Mesh
        Desk001: THREE.Mesh
        Desk002: THREE.Mesh
        Door_interaction_v1003: THREE.Mesh
        Door_interaction_v1003_1: THREE.Mesh
        Door_interaction_v1004: THREE.Mesh
        Door_interaction_v1004_1: THREE.Mesh
        Ferrari_interaction_posters_v1001: THREE.Mesh
        ['Gun-Shy_interaction_posters_v1001']: THREE.Mesh
        Icosphere005: THREE.Mesh
        Icosphere007: THREE.Mesh
        Icosphere008: THREE.Mesh
        Icosphere009: THREE.Mesh
        Icosphere010: THREE.Mesh
        Icosphere011: THREE.Mesh
        Icosphere012: THREE.Mesh
        Icosphere013: THREE.Mesh
        Icosphere014: THREE.Mesh
        Icosphere015: THREE.Mesh
        Icosphere016: THREE.Mesh
        Icosphere017: THREE.Mesh
        Icosphere018: THREE.Mesh
        Icosphere019: THREE.Mesh
        Icosphere020: THREE.Mesh
        Icosphere021: THREE.Mesh
        Icosphere022: THREE.Mesh
        Icosphere023: THREE.Mesh
        Koyla_interaction_posters_v1001: THREE.Mesh
        ['Lamp-shade004']: THREE.Mesh
        ['Lamp-shade004_1']: THREE.Mesh
        leaf004: THREE.Mesh
        leaf004_1: THREE.Mesh
        leaf004_2: THREE.Mesh
        leaf005: THREE.Mesh
        leaf005_1: THREE.Mesh
        leaf005_2: THREE.Mesh
        library001: THREE.Mesh
        lobby_all_static_objects021: THREE.Mesh
        lobby_all_static_objects022: THREE.Mesh
        lobby_all_static_objects023: THREE.Mesh
        lobby_all_static_objects024: THREE.Mesh
        lobby_all_static_objects025: THREE.Mesh
        lobby_all_static_objects026: THREE.Mesh
        music_table_interaction_v2002: THREE.Mesh
        music_table_interaction_v2002_1: THREE.Mesh
        music_table_interaction_v2002_2: THREE.Mesh
        music_table_interaction_v2002_3: THREE.Mesh
        music_table_interaction_v2002_4: THREE.Mesh
        Notice_Board_frame001: THREE.Mesh
        old_camera014_1: THREE.Mesh
        old_camera014_2: THREE.Mesh
        old_camera016_1: THREE.Mesh
        old_camera016_2: THREE.Mesh
        old_camera001: THREE.Mesh
        old_camera001_1: THREE.Mesh
        old_camera017: THREE.Mesh
        old_camera017_1: THREE.Mesh
        Scrip_board_screen_1_interaction_posters_v1001: THREE.Mesh
        Shelves003: THREE.Mesh
        Structure006: THREE.Mesh
        Structure006_1: THREE.Mesh
        Structure006_2: THREE.Mesh
        Structure006_3: THREE.Mesh
        surounding_wood001: THREE.Mesh
        surounding_wood003: THREE.Mesh
        top_light002: THREE.Mesh
        top_light003: THREE.Mesh
        EyeLeft002: THREE.Mesh
        EyeRight002: THREE.Mesh
        Wolf3D_Body001: THREE.Mesh
        Wolf3D_Glasses001: THREE.Mesh
        Wolf3D_Hair001: THREE.Mesh
        Wolf3D_Head001: THREE.Mesh
        Wolf3D_Outfit_Bottom001: THREE.Mesh
        Wolf3D_Outfit_Footwear001: THREE.Mesh
        Wolf3D_Outfit_Top001: THREE.Mesh
        Wolf3D_Teeth001: THREE.Mesh
    }
    materials: {
        black_metal: THREE.MeshPhysicalMaterial
        ['glass.001']: THREE.MeshStandardMaterial
        glass: THREE.MeshStandardMaterial
        ['Cement.005']: THREE.MeshStandardMaterial
        ['Scratched Metal 2.010']: THREE.MeshStandardMaterial
        ['Scratched Metal 2.011']: THREE.MeshStandardMaterial
        ['Glide.010']: THREE.MeshStandardMaterial
        ['Bumped Metal.006']: THREE.MeshStandardMaterial
        ['Flat Wood 2.005']: THREE.MeshStandardMaterial
        ['Metal Gloss.015']: THREE.MeshStandardMaterial
        gold_metal: THREE.MeshStandardMaterial
        lamp_shade_brown: THREE.MeshStandardMaterial
        lamp_shade_beige: THREE.MeshStandardMaterial
        dark_gold_metal: THREE.MeshStandardMaterial
        beige_wood: THREE.MeshStandardMaterial
        dark_red: THREE.MeshStandardMaterial
        black_frame: THREE.MeshStandardMaterial
        green_metal: THREE.MeshStandardMaterial
        brown_soil: THREE.MeshStandardMaterial
        dark_green_stem: THREE.MeshStandardMaterial
        light_green_leaf: THREE.MeshStandardMaterial
        ['lobby-floor']: THREE.MeshPhysicalMaterial
        beige_floor: THREE.MeshStandardMaterial
        ['aiStandardSurface58w/Texture.001']: THREE.MeshStandardMaterial
        salmon_wood: THREE.MeshStandardMaterial
        white_soft: THREE.MeshStandardMaterial
        beige_wood_frame: THREE.MeshStandardMaterial
        light_black_metal: THREE.MeshStandardMaterial
        emissionLight: THREE.MeshStandardMaterial
        elevatorRug: THREE.MeshStandardMaterial
        pink_leaf: THREE.MeshPhysicalMaterial
        orange_leaf: THREE.MeshStandardMaterial
        light_leaf: THREE.MeshStandardMaterial
        ['21jumpStreet_interaction_v1']: THREE.MeshStandardMaterial
        backToFuture_interaction_v1: THREE.MeshStandardMaterial
        badBoys_interaction_v1: THREE.MeshStandardMaterial
        bohemianRhapsody_interaction_v1: THREE.MeshStandardMaterial
        fordVFerrari_interaction_v1: THREE.MeshStandardMaterial
        gunShy_interaction_v1: THREE.MeshStandardMaterial
        interstellar_interaction_v1: THREE.MeshStandardMaterial
        kolya_interaction_v1: THREE.MeshStandardMaterial
        lebanon_interaction_v1: THREE.MeshStandardMaterial
        likeWater4Chocolate_interaction_v1: THREE.MeshStandardMaterial
        madMaxFuryRoad_interaction_v1: THREE.MeshStandardMaterial
        manOnFire_interaction_v1: THREE.MeshStandardMaterial
        ['mr&MrsSmith_interaction_v1']: THREE.MeshStandardMaterial
        scriptBoard_interaction_v1: THREE.MeshStandardMaterial
        theGodfather_interaction_v1: THREE.MeshStandardMaterial
        theShining_interaction_v1: THREE.MeshStandardMaterial
        ['Us movei poster']: THREE.MeshStandardMaterial
        ['blade runner']: THREE.MeshStandardMaterial
        ['the big lebowski']: THREE.MeshStandardMaterial
        ['planet of the apes']: THREE.MeshStandardMaterial
        ['beige_floor.001']: THREE.MeshStandardMaterial
        ['beige_wood.002']: THREE.MeshStandardMaterial
        ['salmon_wood.002']: THREE.MeshStandardMaterial
        script: THREE.MeshStandardMaterial
        ['empire strikes back']: THREE.MeshStandardMaterial
        ['fear & loathing']: THREE.MeshStandardMaterial
        sofaBlue: THREE.MeshStandardMaterial
        table_glass: THREE.MeshStandardMaterial
        dark_wood_texture: THREE.MeshStandardMaterial
        grey: THREE.MeshStandardMaterial
        magazine: THREE.MeshStandardMaterial
        ['magazine.002']: THREE.MeshStandardMaterial
        ['magazine.001']: THREE.MeshStandardMaterial
        white: THREE.MeshStandardMaterial
        elevatorMetal: THREE.MeshStandardMaterial
        elevatorMetalDark: THREE.MeshStandardMaterial
        grey_camera: THREE.MeshPhysicalMaterial
        ['chandelier-emission']: THREE.MeshPhysicalMaterial
        marble_texture: THREE.MeshStandardMaterial
        ['Material.019']: THREE.MeshStandardMaterial
        ['Material.020']: THREE.MeshStandardMaterial
        ['Material.017']: THREE.MeshStandardMaterial
        ['Material.018']: THREE.MeshStandardMaterial
        ['Material.028']: THREE.MeshStandardMaterial
        ['Material.029']: THREE.MeshStandardMaterial
        ['Material.006']: THREE.MeshStandardMaterial
        ['21-Jump-Street interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Back-To-The-Future interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Bad-Boys interaction posters v1.002']: THREE.MeshStandardMaterial
        book4: THREE.MeshStandardMaterial
        ['book page']: THREE.MeshStandardMaterial
        book1: THREE.MeshStandardMaterial
        book3: THREE.MeshStandardMaterial
        book2: THREE.MeshStandardMaterial
        ['carpet.002']: THREE.MeshStandardMaterial
        ['weathered-black casset.002']: THREE.MeshPhysicalMaterial
        ['metallic-white casset.002']: THREE.MeshPhysicalMaterial
        ['black old camera.004']: THREE.MeshPhysicalMaterial
        ['chair desk.003']: THREE.MeshStandardMaterial
        ['Chairs model pink .002']: THREE.MeshStandardMaterial
        ['Chairs model dark-metal-mat chair .002']: THREE.MeshPhysicalMaterial
        ['Computer&Mouse  white']: THREE.MeshPhysicalMaterial
        ['computer-black interaction v2.002']: THREE.MeshPhysicalMaterial
        ['screen prom computer']: THREE.MeshStandardMaterial
        ['book blue']: THREE.MeshStandardMaterial
        ['book page 2']: THREE.MeshStandardMaterial
        ['white board color']: THREE.MeshStandardMaterial
        ['white board texture']: THREE.MeshStandardMaterial
        ['script.001']: THREE.MeshStandardMaterial
        ['coffe machine dark grey']: THREE.MeshStandardMaterial
        ['coffe machine light grey']: THREE.MeshStandardMaterial
        credenza: THREE.MeshStandardMaterial
        ['grey metal ']: THREE.MeshStandardMaterial
        ['dark grey metal']: THREE.MeshStandardMaterial
        note: THREE.MeshStandardMaterial
        ['box for things']: THREE.MeshStandardMaterial
        ['library wood.001']: THREE.MeshStandardMaterial
        trash: THREE.MeshStandardMaterial
        ['credenza feet']: THREE.MeshStandardMaterial
        ['drink red']: THREE.MeshStandardMaterial
        ['drink white']: THREE.MeshStandardMaterial
        ['Material.042']: THREE.MeshStandardMaterial
        ['21jumpStreet_interaction_v1.001']: THREE.MeshStandardMaterial
        mug: THREE.MeshStandardMaterial
        ['blue pen']: THREE.MeshStandardMaterial
        ['white pen']: THREE.MeshStandardMaterial
        ['ping pen']: THREE.MeshStandardMaterial
        ['yeloow pen']: THREE.MeshStandardMaterial
        ['pot for pen']: THREE.MeshStandardMaterial
        ['brown desk .002']: THREE.MeshStandardMaterial
        ['door wood.001']: THREE.MeshStandardMaterial
        ['door black .001']: THREE.MeshPhysicalMaterial
        ['Ferrari interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Gun-Shy interaction posters v1.002']: THREE.MeshStandardMaterial
        ['pepper trash']: THREE.MeshStandardMaterial
        ['Koyla interaction posters v1.002']: THREE.MeshStandardMaterial
        ['BulbEmission Lamp-shade.003']: THREE.MeshStandardMaterial
        ['dark-metal-mat Lamp-shade.003']: THREE.MeshPhysicalMaterial
        ['Leaf.004']: THREE.MeshStandardMaterial
        ['pot.002']: THREE.MeshStandardMaterial
        ['Stem.002']: THREE.MeshStandardMaterial
        ['surounding wood.003']: THREE.MeshStandardMaterial
        ['dark-metal-mat chair music table interaction v2.002']: THREE.MeshPhysicalMaterial
        ['computer-white music table interaction v2.002']: THREE.MeshStandardMaterial
        ['office wall  music table interaction v2.002']: THREE.MeshStandardMaterial
        ['office-blue music table interaction v2.002']: THREE.MeshPhysicalMaterial
        ['black desk music table interaction v2.002']: THREE.MeshStandardMaterial
        ['Notice Board frame.002']: THREE.MeshStandardMaterial
        ['weathered-black old camera.002']: THREE.MeshPhysicalMaterial
        ['Scrip_board_screen_1 interaction posters v1.002']: THREE.MeshStandardMaterial
        ['black Shelves.002']: THREE.MeshStandardMaterial
        ['floor wood.001']: THREE.MeshStandardMaterial
        ['office wall .001']: THREE.MeshStandardMaterial
        ['glass.004']: THREE.MeshStandardMaterial
        ceiling: THREE.MeshStandardMaterial
        ['surounding wood.004']: THREE.MeshStandardMaterial
        ['top light']: THREE.MeshPhysicalMaterial
        Wolf3D_Eye: THREE.MeshStandardMaterial
        Wolf3D_Body: THREE.MeshStandardMaterial
        Wolf3D_Glasses: THREE.MeshStandardMaterial
        Wolf3D_Hair: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Bottom.002']: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
        ['Wolf3D_Outfit_Top.001']: THREE.MeshStandardMaterial
        Wolf3D_Teeth: THREE.MeshStandardMaterial
    }
}

export function Lobby(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF('/models/lobby.glb') as GLTFResult
    const [scriptBoardHovered, setScriptBoardHovered] = useState(false)

    const scriptBoardPointerEnter = () => {
        setScriptBoardHovered(true)
    };

    const scriptBoardPointerLeave = () => {
        setScriptBoardHovered(false)
    };

    return (
        <group position={[-29, -5, -15]} ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Door" position={[28.969, 3.863, 18.915]} scale={0.29}>
                    <mesh
                        name="all_static_objects012"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects012.geometry}
                        material={materials.black_metal}
                    />
                    <mesh
                        name="all_static_objects012_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects012_1.geometry}
                        material={materials['glass.001']}
                    />
                </group>
                <group
                    name="top_layer002"
                    position={[30.634, 13.102, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube131_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube131_1.geometry}
                        material={materials.glass}
                    />
                    <mesh
                        name="Cube131_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube131_2.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube131_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube131_3.geometry}
                        material={materials['Scratched Metal 2.010']}
                    />
                </group>
                <group
                    name="top_layer"
                    position={[30.634, 13.102, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube132_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube132_1.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube132_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube132_2.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="TCom_ArtDecoSet03_03001"
                    castShadow
                    receiveShadow
                    geometry={nodes.TCom_ArtDecoSet03_03001.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[23.847, 18.214, 24.204]}
                    rotation={[Math.PI, Math.PI / 2, 0]}
                    scale={0.375}
                />
                <mesh
                    name="TCom_ArtDecoSet03_03"
                    castShadow
                    receiveShadow
                    geometry={nodes.TCom_ArtDecoSet03_03.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[29.104, 18.214, 29.56]}
                    rotation={[Math.PI, 0, 0]}
                    scale={0.375}
                />
                <group
                    name="TCom_ArtDecoSet01_01001"
                    position={[28.823, 6.793, 30.919]}
                    rotation={[Math.PI, 0, -0.136]}
                    scale={0.616}>
                    <mesh
                        name="TCom_ArtDecoSet01_01006"
                        castShadow
                        receiveShadow
                        geometry={nodes.TCom_ArtDecoSet01_01006.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                    <mesh
                        name="TCom_ArtDecoSet01_01006_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.TCom_ArtDecoSet01_01006_1.geometry}
                        material={materials['Cement.005']}
                    />
                </group>
                <mesh
                    name="Plane019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane019.geometry}
                    material={materials.glass}
                    position={[31.387, 11.434, 29.37]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.393, 0.846, 0.846]}
                />
                <mesh
                    name="Plane022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane022.geometry}
                    material={materials.glass}
                    position={[23.963, 11.45, 29.37]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.209, 0.846, 0.846]}
                />
                <mesh
                    name="Plane024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane024.geometry}
                    material={materials.glass}
                    position={[24.065, 11.39, 16.387]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.379, 0.846, 0.862]}
                />
                <mesh
                    name="Plane025"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane025.geometry}
                    material={materials.glass}
                    position={[24.065, 11.409, 26.427]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.209, 0.846, 0.846]}
                />
                <mesh
                    name="Plane027"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane027.geometry}
                    material={materials.glass}
                    position={[23.67, 2.013, 26.254]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.225, 0.846, 0.846]}
                />
                <mesh
                    name="Plane028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane028.geometry}
                    material={materials.glass}
                    position={[23.596, 2.013, 29.806]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.846}
                />
                <group
                    name="middle_layer002"
                    position={[30.634, 6.733, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube134_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube134_1.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube134_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube134_2.geometry}
                        material={materials['Scratched Metal 2.010']}
                    />
                    <mesh
                        name="Cube134_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube134_3.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                    <mesh
                        name="Cube134_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube134_4.geometry}
                        material={materials['Glide.010']}
                    />
                    <mesh
                        name="Cube134_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube134_5.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <group
                    name="middle_layer"
                    position={[30.634, 7.47, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube135_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube135_1.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube135_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube135_2.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube103"
                    position={[24.141, 17.333, 22.155]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.846, 0.226, 0.846]}>
                    <mesh
                        name="Cube136"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube136.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube136_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube136_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube102"
                    position={[24.141, 17.333, 24.757]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.846, 0.226, 0.846]}>
                    <mesh
                        name="Cube137"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube137.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube137_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube137_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="Cube099"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube099.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[30.634, 7.596, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={[6.877, 0.318, 6.877]}
                />
                <mesh
                    name="Cube098"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube098.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[33.529, 0.918, 29.824]}
                    scale={0.846}
                />
                <mesh
                    name="Cube097"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube097.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[25.396, 0.918, 29.824]}
                    scale={0.846}
                />
                <mesh
                    name="Cube096"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube096.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[23.578, 0.918, 27.876]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <group
                    name="Cube095"
                    position={[30.622, 0.907, 30.773]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.184, 2.536, 0.184]}>
                    <mesh
                        name="Cube144"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube144.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube144_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube144_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group name="Cube094" position={[24.137, 17.792, 26.082]} scale={0.846}>
                    <mesh
                        name="Cube145"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube145.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube145_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube145_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube093"
                    position={[24.137, 17.792, 22.145]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.846}>
                    <mesh
                        name="Cube146"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube146.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube146_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube146_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube092"
                    position={[31.015, 17.81, 29.293]}
                    rotation={[0, 1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube147"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube147.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube147_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube147_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube091"
                    position={[27.078, 17.81, 29.293]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube148"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube148.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube148_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube148_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="Cube079"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[29.098, 9.704, 30.193]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.205, 0.846]}
                />
                <mesh
                    name="Cube078"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube078.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[27.935, 7.644, 30.193]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.247, 0.846]}
                />
                <mesh
                    name="Cube077"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[29.125, 9.399, 30.196]}
                />
                <mesh
                    name="Cube074"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube074.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 12.563, 17.757]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube073"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube073.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 10.285, 17.758]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube072"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube072.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 7.859, 19.234]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube071"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube071.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 6.734, 20.459]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube070"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 12.563, 20.482]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube069"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube069.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 10.285, 20.483]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube068"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube068.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 7.859, 26.641]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube067"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube067.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 6.734, 27.867]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube066"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube066.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 12.563, 27.889]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube065"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube065.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 10.285, 27.89]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube062"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube062.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[35.582, 12.546, 29.368]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube061"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube061.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[35.584, 10.269, 29.368]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube060"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube060.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[31.464, 7.843, 29.368]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube059"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube059.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[32.715, 6.718, 29.368]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube058"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube058.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[32.712, 12.546, 29.368]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube057"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube057.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[32.714, 10.269, 29.368]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube056"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube056.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.168, 7.843, 29.368]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube055"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube055.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[25.551, 6.718, 29.368]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube054"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube054.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[25.416, 12.546, 29.368]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube053"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube053.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[25.417, 10.269, 29.368]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube052"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube052.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[31.246, 2.292, 29.839]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.271, 0.846]}
                />
                <mesh
                    name="Cube051"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube051.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[34.575, 0.909, 29.839]}
                    scale={0.846}
                />
                <mesh
                    name="Cube050"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube050.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[32.352, 0.909, 29.839]}
                    scale={0.846}
                />
                <mesh
                    name="Cube049"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube049.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.617, 2.293, 26.189]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 0.934, 0.846]}
                />
                <mesh
                    name="Cube048"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube048.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.617, 0.91, 28.414]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <mesh
                    name="Cube047"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube047.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.617, 0.91, 27.43]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <mesh
                    name="Cube046"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube046.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.988, 2.292, 29.839]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.846}
                />
                <mesh
                    name="Cube045"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube045.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[25.864, 0.909, 29.839]}
                    scale={0.846}
                />
                <mesh
                    name="Cube044"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube044.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.88, 0.909, 29.839]}
                    scale={0.846}
                />
                <mesh
                    name="Cube043"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[33.624, 5.514, 29.839]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.138, 0.846]}
                />
                <mesh
                    name="Cube042"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube042.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[34.604, 4.447, 29.839]}
                    scale={[0.846, 1.141, 0.846]}
                />
                <mesh
                    name="Cube041"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube041.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[31.252, 5.514, 29.839]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.138, 0.846]}
                />
                <mesh
                    name="Cube040"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube040.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[32.312, 4.447, 29.839]}
                    scale={[0.846, 1.141, 0.846]}
                />
                <mesh
                    name="Cube039"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube039.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.79, 5.535, 29.839]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.625, 0.846]}
                />
                <mesh
                    name="Cube038"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube038.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[25.237, 4.456, 29.839]}
                    scale={[0.846, 1.156, 0.846]}
                />
                <mesh
                    name="Cube037"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube037.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.538, 5.489, 26.258]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.79, 0.846]}
                />
                <mesh
                    name="Cube036"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube036.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.538, 4.596, 27.953]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.082, 0.846]}
                />
                <mesh
                    name="Cube035"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube035.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.538, 5.489, 20.961]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.593, 0.846]}
                />
                <mesh
                    name="Cube034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.538, 4.596, 22.45]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.082, 0.846]}
                />
                <mesh
                    name="Cube033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.559, 5.489, 17.752]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.55, 0.846]}
                />
                <mesh
                    name="Cube032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube032.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[23.559, 4.596, 19.237]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.082, 0.846]}
                />
                <group
                    name="Cube023"
                    position={[25.435, 3.419, 28.023]}
                    rotation={[0, -1.571, 0]}
                    scale={[2.162, 0.383, 2.197]}>
                    <mesh
                        name="Cube209"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube209.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube209_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube209_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube018"
                    position={[29.06, 0.918, 29.329]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube214"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube214.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube214_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube214_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group name="Cube025" position={[29.051, 16.153, 28.888]} scale={0.846}>
                    <mesh
                        name="Cube218"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube218.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube218_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube218_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube026"
                    position={[24.527, 16.154, 24.109]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube219"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube219.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube219_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube219_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="Cube028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[20.798, 0.117, 25.143]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <group
                    name="Cube029"
                    position={[24.042, 0.918, 24.107]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.846}>
                    <mesh
                        name="Cube222"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube222.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube222_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube222_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube104"
                    position={[27.504, 0.907, 30.752]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.184, 2.536, 0.184]}>
                    <mesh
                        name="Cube224"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube224.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube224_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube224_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="Cube107"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube107.geometry}
                    material={materials['Cement.005']}
                    position={[29.061, 0.918, 29.359]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <mesh
                    name="Cube108"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube108.geometry}
                    material={materials['Cement.005']}
                    position={[23.502, 0.918, 29.903]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <group
                    name="Cube109"
                    position={[23.636, 0.918, 25.108]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube229"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube229.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube229_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube229_1.geometry}
                        material={materials['Flat Wood 2.005']}
                    />
                    <mesh
                        name="Cube229_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube229_2.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                    <mesh
                        name="Cube229_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube229_3.geometry}
                        material={materials.glass}
                    />
                </group>
                <group name="Cube110" position={[37.074, 0.918, 30.092]} scale={[0.846, 0.744, 0.846]}>
                    <mesh
                        name="Cube230"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube230.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube230_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube230_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <group
                    name="Cube111"
                    position={[23.31, 0.918, 16.268]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 0.749, 0.846]}>
                    <mesh
                        name="Cube231"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube231.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube231_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube231_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="Cube112"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube112.geometry}
                    material={materials['Metal Gloss.015']}
                    position={[22.199, 3.472, 21.7]}
                    rotation={[0, -1.571, 0]}
                    scale={[1.11, 0.846, 0.846]}
                />
                <mesh
                    name="Circle012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle012.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[22.897, 2.998, 16.331]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.144}
                />
                <mesh
                    name="Circle011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle011.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[22.897, 3.695, 16.331]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.144}
                />
                <mesh
                    name="Circle010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle010.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[22.897, 4.416, 16.331]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.144}
                />
                <mesh
                    name="Circle009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle009.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[37.081, 2.954, 30.505]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.144}
                />
                <mesh
                    name="Circle008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle008.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[37.081, 3.65, 30.505]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.144}
                />
                <mesh
                    name="Circle007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle007.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[37.081, 4.372, 30.505]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.144}
                />
                <mesh
                    name="Circle006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[23.843, 17.434, 24.19]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.144}
                />
                <mesh
                    name="Circle005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle005.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[29.117, 16.648, 29.572]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.144}
                />
                <mesh
                    name="Circle004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[29.119, 17.051, 29.572]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.144}
                />
                <mesh
                    name="Circle003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle003.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[29.119, 17.462, 29.572]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.144}
                />
                <mesh
                    name="Circle002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[23.843, 16.621, 24.19]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.144}
                />
                <mesh
                    name="Circle001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[23.843, 17.024, 24.19]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.144}
                />
                <mesh
                    name="Bottom_layer007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bottom_layer007.geometry}
                    material={materials['Cement.005']}
                    position={[30.634, 0.918, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <group
                    name="Bottom_layer005"
                    position={[30.634, 0.918, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube235"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube235.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                    <mesh
                        name="Cube235_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube235_1.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <mesh
                    name="Bottom_layer004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bottom_layer004.geometry}
                    material={nodes.Bottom_layer004.material}
                    position={[30.634, 0.918, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <mesh
                    name="Bottom_layer003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bottom_layer003.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[30.634, 0.833, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <group
                    name="Bottom_layer002"
                    position={[30.634, 0.918, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube238"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube238.geometry}
                        material={materials['Glide.010']}
                    />
                    <mesh
                        name="Cube238_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube238_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                    <mesh
                        name="Cube238_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube238_2.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <mesh
                    name="Bevelling"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bevelling.geometry}
                    material={materials['Cement.005']}
                    position={[17.548, 0.261, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}
                />
                <group
                    name="Base_shape"
                    position={[30.634, 0.918, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube239"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube239.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube239_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube239_1.geometry}
                        material={materials['Scratched Metal 2.010']}
                    />
                </group>
                <group
                    name="Base_shape001"
                    position={[30.634, 1.958, 22.777]}
                    rotation={[0, -1.571, 0]}
                    scale={0.846}>
                    <mesh
                        name="Cube240"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube240.geometry}
                        material={materials['Cement.005']}
                    />
                    <mesh
                        name="Cube240_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube240_1.geometry}
                        material={materials['Scratched Metal 2.011']}
                    />
                </group>
                <mesh
                    name="middle_layer004"
                    castShadow
                    receiveShadow
                    geometry={nodes.middle_layer004.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[32.28, 6.737, 30.051]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 0.846, 0.694]}
                />
                <mesh
                    name="middle_layer001"
                    castShadow
                    receiveShadow
                    geometry={nodes.middle_layer001.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[34.59, 6.737, 30.051]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 0.846, 0.694]}
                />
                <mesh
                    name="middle_layer005"
                    castShadow
                    receiveShadow
                    geometry={nodes.middle_layer005.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[25.371, 6.74, 30.051]}
                    rotation={[Math.PI, -1.571, 0]}
                    scale={[-0.846, -0.846, -1.043]}
                />
                <mesh
                    name="middle_layer006"
                    castShadow
                    receiveShadow
                    geometry={nodes.middle_layer006.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[23.387, 6.728, 28.012]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[-0.846, -0.846, -1.166]}
                />
                <mesh
                    name="Bottom_layer006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bottom_layer006.geometry}
                    material={materials['Scratched Metal 2.011']}
                    position={[23.465, 5.268, 28.319]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.846}
                />
                <mesh
                    name="Plane016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane016.geometry}
                    material={materials.glass}
                    position={[23.545, 5.496, 27.956]}
                    rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                    name="Plane018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018.geometry}
                    material={materials.glass}
                    position={[23.545, 5.496, 22.45]}
                    rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                    name="Plane020"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane020.geometry}
                    material={materials.glass}
                    position={[23.545, 5.496, 19.174]}
                    rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                    name="Plane021"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane021.geometry}
                    material={materials.glass}
                    position={[25.305, 5.496, 29.835]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Plane023"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane023.geometry}
                    material={materials.glass}
                    position={[32.333, 5.496, 29.841]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Plane026"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane026.geometry}
                    material={materials.glass}
                    position={[34.698, 5.496, 29.842]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Plane029"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane029.geometry}
                    material={materials.glass}
                    position={[35.575, 9.039, 29.368]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Plane030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane030.geometry}
                    material={materials.glass}
                    position={[32.74, 9.039, 29.368]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Plane031"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane031.geometry}
                    material={materials.glass}
                    position={[25.502, 9.039, 29.368]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Plane032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane032.geometry}
                    material={materials.glass}
                    position={[24.058, 9.039, 27.887]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                    name="Plane033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane033.geometry}
                    material={materials.glass}
                    position={[24.058, 9.039, 20.477]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                    name="Plane034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane034.geometry}
                    material={materials.glass}
                    position={[24.058, 9.039, 17.743]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                    name="Plane036"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane036.geometry}
                    material={materials.glass}
                    position={[29.118, 9.33, 30.193]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                    name="middle_layer007"
                    castShadow
                    receiveShadow
                    geometry={nodes.middle_layer007.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[23.387, 6.728, 22.5]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    name="middle_layer008"
                    castShadow
                    receiveShadow
                    geometry={nodes.middle_layer008.geometry}
                    material={materials['Scratched Metal 2.010']}
                    position={[23.387, 6.728, 19.245]}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    name="Plane037"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane037.geometry}
                    material={materials['Cement.005']}
                    position={[29.101, 0.14, 33.177]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube123"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube123.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[34.376, 7.843, 29.368]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube124"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube124.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[35.627, 6.718, 29.368]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <mesh
                    name="Cube127"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube127.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 7.859, 16.435]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.846, 1.328, 0.846]}
                />
                <mesh
                    name="Cube128"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube128.geometry}
                    material={materials['Bumped Metal.006']}
                    position={[24.038, 6.734, 17.66]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.846, 1.257, 0.846]}
                />
                <group name="lobby_all_static_objects001" position={[28.843, 3.863, 18.928]} scale={0.29}>
                    <mesh
                        name="all_static_objects001"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects001.geometry}
                        material={materials.gold_metal}
                    />
                    <mesh
                        name="all_static_objects001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects001_1.geometry}
                        material={materials.lamp_shade_brown}
                    />
                    <mesh
                        name="all_static_objects001_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects001_2.geometry}
                        material={materials.lamp_shade_beige}
                    />
                    <mesh
                        name="all_static_objects001_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects001_3.geometry}
                        material={materials.dark_gold_metal}
                    />
                </group>
                <group name="lobby_all_static_objects048" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects064"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects064.geometry}
                        material={materials.lamp_shade_brown}
                    />
                    <mesh
                        name="all_static_objects064_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects064_1.geometry}
                        material={materials.lamp_shade_beige}
                    />
                </group>
                <group name="lobby_all_static_objects032" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects050"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects050.geometry}
                        material={materials.gold_metal}
                    />
                    <mesh
                        name="all_static_objects050_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects050_1.geometry}
                        material={materials.lamp_shade_brown}
                    />
                    <mesh
                        name="all_static_objects050_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects050_2.geometry}
                        material={materials.lamp_shade_beige}
                    />
                    <mesh
                        name="all_static_objects050_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects050_3.geometry}
                        material={materials.dark_gold_metal}
                    />
                </group>
                <group name="lobby_all_static_objects003" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects003"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects003.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="all_static_objects003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects003_1.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects004"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects004.geometry}
                    material={materials.black_frame}
                    position={[32.747, 9.057, 29.07]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects005"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects005.geometry}
                    material={materials.black_frame}
                    position={[24.382, 9.055, 20.423]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects008"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects008.geometry}
                    material={materials.black_frame}
                    position={[29.066, 3.863, 19.002]}
                    scale={0.29}
                />
                <group
                    name="lobby_all_static_objects010"
                    position={[24.221, 9.055, 27.864]}
                    rotation={[0, -1.571, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects021"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects021.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects021_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects021_1.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects009"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects009.geometry}
                    material={materials.black_frame}
                    position={[28.901, 4.066, 18.94]}
                    scale={0.29}
                />
                <group
                    name="lobby_all_static_objects011"
                    position={[23.254, 9.39, 24.147]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects023"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects023.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects023_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects023_1.geometry}
                        material={materials.glass}
                    />
                    <mesh
                        name="all_static_objects023_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects023_2.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects012"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects012.geometry}
                    material={materials.black_frame}
                    position={[28.969, 3.863, 18.95]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects006"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects006.geometry}
                    material={materials.black_frame}
                    position={[25.08, 5.886, 29.732]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects013"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects013.geometry}
                    material={materials.black_frame}
                    position={[23.678, 5.886, 28.152]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects014"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects014.geometry}
                    material={materials.black_frame}
                    position={[23.676, 5.763, 22.519]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects015"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects015.geometry}
                    material={materials.black_frame}
                    position={[23.676, 5.763, 19.251]}
                    scale={0.29}
                />
                <group
                    name="lobby_all_static_objects016"
                    position={[23.254, 12.555, 24.147]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects028"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects028.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects028_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects028_1.geometry}
                        material={materials.glass}
                    />
                    <mesh
                        name="all_static_objects028_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects028_2.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <group
                    name="lobby_all_static_objects018"
                    position={[29.087, 12.555, 30.138]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects030"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects030.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects030_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects030_1.geometry}
                        material={materials.glass}
                    />
                    <mesh
                        name="all_static_objects030_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects030_2.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <group
                    name="lobby_all_static_objects019"
                    position={[29.087, 15.716, 30.138]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects032"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects032.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects032_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects032_1.geometry}
                        material={materials.glass}
                    />
                    <mesh
                        name="all_static_objects032_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects032_2.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <group
                    name="lobby_all_static_objects017"
                    position={[23.254, 15.727, 24.147]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects033"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects033.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects033_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects033_1.geometry}
                        material={materials.glass}
                    />
                    <mesh
                        name="all_static_objects033_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects033_2.geometry}
                        material={materials['Bumped Metal.006']}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects020"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects020.geometry}
                    material={materials.beige_wood}
                    position={[28.969, 3.871, 18.95]}
                />
                <mesh
                    name="lobby_all_static_objects051"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects051.geometry}
                    material={materials.black_frame}
                    position={[35.588, 9.057, 29.07]}
                    scale={0.29}
                />
                <mesh
                    name="lobby_all_static_objects059"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects059.geometry}
                    material={materials.black_frame}
                    position={[24.382, 9.055, 17.676]}
                    scale={0.29}
                />
                <group name="Plants" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects004"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects004.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects004_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects004_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects004_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects004_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects004_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants001" position={[24.021, 4.653, 29.154]} scale={0.29}>
                    <mesh
                        name="all_static_objects006"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects006.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects006_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects006_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects006_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects006_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects006_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects006_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants002" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects007"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects007.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects007_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects007_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects007_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects007_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects007_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects007_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants003" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects008"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects008.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects008_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects008_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects008_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects008_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects008_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects008_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants004" position={[34.607, 8.028, 17.356]} scale={0.29}>
                    <mesh
                        name="all_static_objects010"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects010.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects010_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects010_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects010_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects010_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects010_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects010_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants005" position={[25.466, 3.863, 16.692]} scale={0.29}>
                    <mesh
                        name="all_static_objects009"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects009.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects009_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects009_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects009_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects009_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects009_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects009_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants006" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects011"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects011.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects011_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects011_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects011_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects011_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects011_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects011_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants007" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects005"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects005.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects005_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects005_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects005_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects005_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects005_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects005_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="lobby_all_static_objects060" position={[36.965, 4.471, 29.037]} scale={0.29}>
                    <mesh
                        name="all_static_objects079"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects079.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects079_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects079_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects079_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects079_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects079_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects079_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants008" position={[26.572, 4.46, 15.558]} scale={0.29}>
                    <mesh
                        name="all_static_objects042"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects042.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects042_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects042_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects042_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects042_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects042_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects042_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="Plants009" position={[31.68, 4.471, 15.772]} scale={0.29}>
                    <mesh
                        name="all_static_objects045"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects045.geometry}
                        material={materials.green_metal}
                    />
                    <mesh
                        name="all_static_objects045_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects045_1.geometry}
                        material={materials.brown_soil}
                    />
                    <mesh
                        name="all_static_objects045_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects045_2.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects045_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects045_3.geometry}
                        material={materials.light_green_leaf}
                    />
                </group>
                <group name="lobby_walkable_paths" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="walkable_paths"
                        castShadow
                        receiveShadow
                        geometry={nodes.walkable_paths.geometry}
                        material={materials['lobby-floor']}
                    />
                    <mesh
                        name="walkable_paths_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.walkable_paths_1.geometry}
                        material={materials.beige_floor}
                    />
                </group>
                <mesh
                    name="lobby_walkable_paths002"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_walkable_paths002.geometry}
                    material={materials['aiStandardSurface58w/Texture.001']}
                    position={[28.969, 3.863, 18.95]}
                    scale={0.29}
                />
                <group name="lobby_all_static_objects" position={[28.969, 3.863, 18.95]} scale={0.29}>
                    <mesh
                        name="all_static_objects"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects.geometry}
                        material={materials['aiStandardSurface58w/Texture.001']}
                    />
                    <mesh
                        name="all_static_objects_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_1.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="all_static_objects_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_2.geometry}
                        material={materials.salmon_wood}
                    />
                    <mesh
                        name="all_static_objects_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_3.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_5.geometry}
                        material={materials.black_metal}
                    />
                    <mesh
                        name="all_static_objects_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_6.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_7.geometry}
                        material={materials.light_black_metal}
                    />
                    <mesh
                        name="all_static_objects_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_8.geometry}
                        material={materials.emissionLight}
                    />
                    <mesh
                        name="all_static_objects_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects_9.geometry}
                        material={materials.elevatorRug}
                    />
                </group>
                <group name="lobby_all_static_objects035" position={[28.969, 3.863, 18.357]} scale={0.29}>
                    <mesh
                        name="all_static_objects048"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects048.geometry}
                        material={materials.dark_green_stem}
                    />
                    <mesh
                        name="all_static_objects048_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects048_1.geometry}
                        material={materials.light_green_leaf}
                    />
                    <mesh
                        name="all_static_objects048_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects048_2.geometry}
                        material={materials.pink_leaf}
                    />
                    <mesh
                        name="all_static_objects048_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects048_3.geometry}
                        material={materials.orange_leaf}
                    />
                    <mesh
                        name="all_static_objects048_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects048_4.geometry}
                        material={materials.light_leaf}
                    />
                </group>
                <group name="lobby_all_static_objects002" position={[32.789, 4.266, 21.836]} scale={0.29}>
                    <mesh
                        name="all_static_objects049"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects049.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="all_static_objects049_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects049_1.geometry}
                        material={materials.salmon_wood}
                    />
                </group>
                <group name="lobby_all_static_objects007" position={[34.368, 4.266, 21.836]} scale={0.29}>
                    <mesh
                        name="all_static_objects054"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects054.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="all_static_objects054_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects054_1.geometry}
                        material={materials.salmon_wood}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects054"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects054.geometry}
                    material={materials.beige_wood_frame}
                    position={[28.969, 3.863, 18.95]}
                    scale={0.29}
                />
                <group name="Cube125" position={[30.704, 3.801, 27.313]}>
                    <mesh
                        name="Cube065_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube065_1.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="Cube065_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube065_2.geometry}
                        material={materials.salmon_wood}
                    />
                </group>
                <group name="Cube126" position={[27.585, 3.801, 27.313]}>
                    <mesh
                        name="Cube065_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube065_1.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="Cube065_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube065_2.geometry}
                        material={materials.salmon_wood}
                    />
                </group>
                <mesh
                    name="Cube129"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube129.geometry}
                    material={materials.black_metal}
                    position={[35.368, 4.206, 26.972]}
                />
                <group name="Cube130" position={[37.497, 3.862, 26.972]}>
                    <mesh
                        name="Cube070_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube070_1.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="Cube070_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube070_2.geometry}
                        material={materials.salmon_wood}
                    />
                </group>
                <mesh
                    name="lobby_walkable_paths001"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_walkable_paths001.geometry}
                    material={materials['beige_floor.001']}
                    position={[33.615, 6.482, 18.653]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}
                />
                <group
                    name="lobby_all_static_objects061"
                    position={[33.58, 7.17, 18.612]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects037"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects037.geometry}
                        material={materials['beige_wood.002']}
                    />
                    <mesh
                        name="all_static_objects037_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects037_1.geometry}
                        material={materials['salmon_wood.002']}
                    />
                </group>
                <mesh
                    name="Plane010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane010.geometry}
                    material={materials.script}
                    position={[23.987, 4.31, 25.492]}
                    rotation={[0, 1.571, 0]}
                    scale={0.961}
                />

                {/* sadas */}
                <mesh
                    name="Plane013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane013.geometry}
                    material={materials.script}
                    position={[23.999, 4.321, 25.263]}
                    rotation={[-2.998, 1.556, 2.915]}
                />
                <mesh
                    name="Plane045"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials.script}
                    position={[23.935, 4.682, 25.003]}
                    rotation={[-2.474, 1.549, 2.466]}
                    scale={0.961}
                />
                <mesh
                    name="Plane046"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane046.geometry}
                    material={materials.script}
                    position={[23.947, 4.695, 25.232]}
                    rotation={[0.114, 1.476, -0.059]}
                />
                <mesh
                    name="Plane047"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane047.geometry}
                    material={materials.script}
                    position={[23.934, 5.059, 25.528]}
                    rotation={[0.084, 1.453, -0.082]}
                    scale={0.961}
                />
                <mesh
                    name="Plane048"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane048.geometry}
                    material={materials.script}
                    position={[23.921, 5.071, 25.289]}
                    rotation={[2.208, 1.533, -2.283]}
                    scale={0.961}
                />
                <mesh
                    name="Plane049"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane049.geometry}
                    material={materials.script}
                    position={[25.506, 4.211, 27.409]}
                    rotation={[0.084, 1.453, -0.082]}
                    scale={0.961}
                />
                <mesh
                    name="Plane050"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane050.geometry}
                    material={materials.script}
                    position={[25.818, 4.225, 27.281]}
                    rotation={[2.208, 1.533, -2.283]}
                    scale={0.961}
                />
                <mesh
                    name="Plane051"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane051.geometry}
                    material={materials.script}
                    position={[25.699, 4.351, 24.166]}
                    rotation={[0.356, 1.432, -0.339]}
                    scale={0.961}
                />
                <mesh
                    name="Plane069"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane069.geometry}
                    material={materials.script}
                    position={[23.867, 5.441, 24.968]}
                    rotation={[2.35, 1.534, -2.35]}
                    scale={0.961}
                />
                <mesh
                    name="Plane070"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane070.geometry}
                    material={materials.script}
                    position={[23.871, 5.46, 25.129]}
                    rotation={[2.29, 1.523, -2.14]}
                    scale={0.961}
                />
                <group name="lobby_all_static_objects027" position={[28.969, 3.863, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects036"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects036.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects036_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects036_1.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <group name="lobby_all_static_objects029" position={[25.681, 4.107, 20.367]} scale={0.29}>
                    <mesh
                        name="all_static_objects039"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects039.geometry}
                        material={materials.table_glass}
                    />
                    <mesh
                        name="all_static_objects039_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects039_1.geometry}
                        material={materials.black_frame}
                    />
                </group>
                <group name="lobby_all_static_objects028" position={[28.969, 3.863, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects038"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects038.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects038_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects038_1.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <group name="lobby_all_static_objects031" position={[28.969, 3.863, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects044"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects044.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects044_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects044_1.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects044_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects044_2.geometry}
                        material={materials.dark_wood_texture}
                    />
                </group>
                <group name="lobby_all_static_objects037" position={[28.969, 3.863, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects051"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects051.geometry}
                        material={materials.dark_wood_texture}
                    />
                    <mesh
                        name="all_static_objects051_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects051_1.geometry}
                        material={materials.table_glass}
                    />
                </group>
                <group
                    name="lobby_all_static_objects039"
                    position={[33.901, 4.363, 28.34]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects053"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects053.geometry}
                        material={materials.beige_wood}
                    />
                    <mesh
                        name="all_static_objects053_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects053_1.geometry}
                        material={materials.dark_wood_texture}
                    />
                </group>
                <group
                    name="lobby_all_static_objects041"
                    position={[35.702, 4.121, 28.584]}
                    rotation={[-Math.PI, 1.332, -Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects056"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects056.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects056_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects056_1.geometry}
                        material={materials.black_metal}
                    />
                </group>
                <group name="lobby_all_static_objects040" position={[28.969, 3.863, 25.681]} scale={0.29}>
                    <mesh
                        name="all_static_objects070"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects070.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects070_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects070_1.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <group name="lobby_all_static_objects055" position={[25.731, 4.106, 27.381]} scale={0.29}>
                    <mesh
                        name="all_static_objects073"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects073.geometry}
                        material={materials.table_glass}
                    />
                    <mesh
                        name="all_static_objects073_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects073_1.geometry}
                        material={materials.black_frame}
                    />
                </group>
                <group
                    name="lobby_all_static_objects049"
                    position={[25.732, 4.184, 25.906]}
                    rotation={[0, 0.748, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects013"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects013.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects013_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects013_1.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects013_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects013_2.geometry}
                        material={materials.dark_wood_texture}
                    />
                </group>
                <group
                    name="lobby_all_static_objects050"
                    position={[24.22, 4.184, 27.532]}
                    rotation={[-Math.PI, 0.86, -Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects043"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects043.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects043_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects043_1.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects043_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects043_2.geometry}
                        material={materials.dark_wood_texture}
                    />
                </group>
                <group
                    name="lobby_all_static_objects043"
                    position={[33.92, 4.271, 15.72]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects020"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects020.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects020_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects020_1.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <group name="lobby_all_static_objects044" position={[33.851, 4.1, 17.295]} scale={0.29}>
                    <mesh
                        name="all_static_objects024"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects024.geometry}
                        material={materials.dark_wood_texture}
                    />
                    <mesh
                        name="all_static_objects024_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects024_1.geometry}
                        material={materials.table_glass}
                    />
                </group>
                <group
                    name="lobby_all_static_objects045"
                    position={[32.711, 4.184, 18.35]}
                    rotation={[Math.PI, -0.239, Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects029"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects029.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects029_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects029_1.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects029_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects029_2.geometry}
                        material={materials.dark_wood_texture}
                    />
                </group>
                <group
                    name="lobby_all_static_objects036"
                    position={[24.322, 4.184, 23.329]}
                    rotation={[-Math.PI, 1.394, -Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects072"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects072.geometry}
                        material={materials.white_soft}
                    />
                    <mesh
                        name="all_static_objects072_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects072_1.geometry}
                        material={materials.sofaBlue}
                    />
                    <mesh
                        name="all_static_objects072_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects072_2.geometry}
                        material={materials.dark_wood_texture}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects063"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects063.geometry}
                    material={materials.dark_wood_texture}
                    position={[33.9, 4.363, 28.218]}
                    rotation={[0, 1.571, 0]}
                    scale={0.29}
                />
                <group name="lobby_all_static_objects030" position={[28.969, 3.841, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects040"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects040.geometry}
                        material={materials.grey}
                    />
                    <mesh
                        name="all_static_objects040_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects040_1.geometry}
                        material={materials.magazine}
                    />
                    <mesh
                        name="all_static_objects040_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects040_2.geometry}
                        material={materials['magazine.002']}
                    />
                </group>
                <group name="lobby_all_static_objects033" position={[28.969, 3.863, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects046"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects046.geometry}
                        material={materials.gold_metal}
                    />
                    <mesh
                        name="all_static_objects046_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects046_1.geometry}
                        material={materials.green_metal}
                    />
                </group>
                <mesh
                    name="lobby_all_static_objects034"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects034.geometry}
                    material={materials.white_soft}
                    position={[28.969, 3.863, 18.352]}
                    scale={0.29}
                />
                <group name="lobby_all_static_objects038" position={[28.969, 3.863, 18.352]} scale={0.29}>
                    <mesh
                        name="all_static_objects052"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects052.geometry}
                        material={materials.grey}
                    />
                    <mesh
                        name="all_static_objects052_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects052_1.geometry}
                        material={materials['magazine.001']}
                    />
                </group>
                <group
                    name="lobby_all_static_objects042"
                    position={[33.925, 4.718, 28.581]}
                    rotation={[0, 1.57, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects057"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects057.geometry}
                        material={materials.black_metal}
                    />
                    <mesh
                        name="all_static_objects057_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects057_1.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects057_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects057_2.geometry}
                        material={materials.white}
                    />
                </group>
                <group name="elevator_interaction_v1" position={[29.209, 3.858, 22.98]} scale={0.8}>
                    <mesh
                        name="elevator_interaction_v1_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.elevator_interaction_v1_1.geometry}
                        material={materials.elevatorMetal}
                    />
                    <mesh
                        name="elevator_interaction_v1_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.elevator_interaction_v1_2.geometry}
                        material={materials.elevatorMetalDark}
                    />
                    <mesh
                        name="elevator_interaction_v1_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.elevator_interaction_v1_3.geometry}
                        material={materials.dark_red}
                    />
                </group>
                <group
                    name="lobby_all_static_objects047"
                    position={[24.503, 5.109, 16.397]}
                    rotation={[Math.PI, -0.762, Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects063"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects063.geometry}
                        material={materials.black_metal}
                    />
                    <mesh
                        name="all_static_objects063_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects063_1.geometry}
                        material={materials.grey_camera}
                    />
                </group>
                <group
                    name="lobby_all_static_objects052"
                    position={[24.257, 4.828, 26.544]}
                    rotation={[0, -1.337, 0]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects068"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects068.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects068_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects068_1.geometry}
                        material={materials['chandelier-emission']}
                    />
                </group>
                <group
                    name="lobby_all_static_objects053"
                    position={[24.44, 4.828, 17.258]}
                    rotation={[Math.PI, -0.521, Math.PI]}
                    scale={0.29}>
                    <mesh
                        name="all_static_objects069"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects069.geometry}
                        material={materials.black_frame}
                    />
                    <mesh
                        name="all_static_objects069_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects069_1.geometry}
                        material={materials['chandelier-emission']}
                    />
                </group>
                <group name="lobby_all_static_objects057" position={[27.606, 3.863, 19.032]} scale={0.29}>
                    <mesh
                        name="all_static_objects075"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects075.geometry}
                        material={materials.beige_wood_frame}
                    />
                    <mesh
                        name="all_static_objects075_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects075_1.geometry}
                        material={materials.marble_texture}
                    />
                </group>
                <group name="lobby_all_static_objects062" position={[37.467, 3.863, 19.032]} scale={0.29}>
                    <mesh
                        name="all_static_objects041"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects041.geometry}
                        material={materials.beige_wood_frame}
                    />
                    <mesh
                        name="all_static_objects041_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.all_static_objects041_1.geometry}
                        material={materials.marble_texture}
                    />
                </group>
                <mesh
                    name="Simple_GP_Layer"
                    castShadow
                    receiveShadow
                    geometry={nodes.Simple_GP_Layer.geometry}
                    material={materials.black_metal}
                    position={[1.442, 0, 0]}
                />
                <group
                    name="Cube003"
                    position={[37.643, 5.557, 25.863]}
                    rotation={[0, 1.571, 0]}
                    scale={[1.433, 1.129, 0.054]}>
                    <mesh
                        name="Cube009_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube009_1.geometry}
                        material={materials['Material.019']}
                    />
                    <mesh
                        name="Cube009_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube009_2.geometry}
                        material={materials['Material.020']}
                    />
                </group>
                <group
                    name="Cube008"
                    position={[37.348, 4.427, 23.674]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={[-0.266, -0.04, -0.363]}>
                    <mesh
                        name="Cube014_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_1.geometry}
                        material={materials['Material.017']}
                    />
                    <mesh
                        name="Cube014_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_2.geometry}
                        material={materials['Material.018']}
                    />
                </group>
                <group
                    name="Cube007"
                    position={[37.438, 4.902, 23.749]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={[-0.142, -0.017, -0.178]}>
                    <mesh
                        name="Cube013_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_1.geometry}
                        material={materials['Material.028']}
                    />
                    <mesh
                        name="Cube013_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_2.geometry}
                        material={materials['Material.029']}
                    />
                </group>
                <mesh
                    name="Cylinder015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015.geometry}
                    material={materials['Material.006']}
                    position={[37.411, 4.893, 23.445]}
                    rotation={[0, -0.771, 0]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Cylinder004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004.geometry}
                    material={materials['Material.006']}
                    position={[37.203, 4.893, 23.445]}
                    rotation={[0, -1.283, 0]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Cylinder006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder006.geometry}
                    material={materials['Material.006']}
                    position={[37.373, 4.893, 24.058]}
                    rotation={[0, -1.283, 0]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Cube"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials['Material.017']}
                    position={[23.724, 3.863, 25.737]}
                    rotation={[0, 1.571, 0]}
                />

                <group name="Books006" position={[27.941, 16.25, 23.515]} scale={0.947}>
                    <mesh
                        name="Books001"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books001.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books001_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books007"
                    position={[28.016, 16.244, 23.508]}
                    rotation={[0, 0, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books002"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books002.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books002_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books008" position={[27.885, 16.25, 23.515]} scale={0.947}>
                    <mesh
                        name="Books003"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books003.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books003_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books009" position={[27.837, 16.25, 23.515]} scale={0.947}>
                    <mesh
                        name="Books004"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books004.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books004_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books010" position={[27.968, 16.55, 23.516]} scale={0.986}>
                    <mesh
                        name="Books005"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books005.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books005_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books005_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books011"
                    position={[25.673, 15.236, 20.093]}
                    rotation={[-1.687, -1.541, 3.019]}
                    scale={1.223}>
                    <mesh
                        name="Books046_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books046_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books046_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books046_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books012"
                    position={[25.843, 15.225, 20.482]}
                    rotation={[-0.065, -0.842, 0.955]}
                    scale={1.074}>
                    <mesh
                        name="Books047_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books047_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books047_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books047_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books013" position={[27.547, 15.83, 23.515]} scale={0.947}>
                    <mesh
                        name="Books023_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books023_1.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books023_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books023_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books014"
                    position={[27.622, 15.825, 23.508]}
                    rotation={[0, 0, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books024_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books024_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books024_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books024_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books015" position={[32.729, 15.504, 17.456]} rotation={[0, 1.529, -0.123]}>
                    <mesh
                        name="Books053_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books053_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books053_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books053_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books016"
                    position={[32.755, 15.949, 17.424]}
                    rotation={[0, 1.542, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books054"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books054.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books054_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books054_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books017"
                    position={[32.75, 15.944, 17.349]}
                    rotation={[0, 1.542, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books055"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books055.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books055_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books055_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books018"
                    position={[32.746, 15.504, 17.374]}
                    rotation={[0, 1.529, 0]}
                    scale={1.086}>
                    <mesh
                        name="Books056"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books056.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books056_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books056_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books019" position={[32.729, 15.504, 17.51]} rotation={[0, 1.529, -0.123]}>
                    <mesh
                        name="Books057"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books057.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books057_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books057_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books020" position={[32.729, 15.504, 17.563]} rotation={[0, 1.529, -0.123]}>
                    <mesh
                        name="Books058"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books058.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books058_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books058_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books021"
                    position={[32.755, 15.949, 17.477]}
                    rotation={[0, 1.542, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books059"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books059.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books059_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books059_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books022"
                    position={[32.755, 15.949, 17.532]}
                    rotation={[0, 1.542, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books060"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books060.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books060_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books060_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books023" position={[27.399, 15.836, 23.502]} rotation={[0, 0, -0.123]}>
                    <mesh
                        name="Books025_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books025_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books025_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books025_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books024" position={[27.482, 15.836, 23.516]} scale={1.086}>
                    <mesh
                        name="Books026_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books026_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books026_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books026_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books025" position={[28.021, 16.55, 23.516]} scale={0.986}>
                    <mesh
                        name="Books027_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books027_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books027_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books027_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books026" position={[28.077, 16.55, 23.516]} scale={0.986}>
                    <mesh
                        name="Books028_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books028_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books028_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books028_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books027" position={[28.949, 16.243, 23.502]} rotation={[0, 0, -0.123]}>
                    <mesh
                        name="Books029_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books029_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books029_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books029_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books028" position={[29.02, 16.243, 23.502]} rotation={[0.026, 0, -0.026]}>
                    <mesh
                        name="Books030_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books030_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books030_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books030_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books029"
                    position={[29.097, 16.244, 23.508]}
                    rotation={[0, 0, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books031_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books031_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books031_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books031_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books030"
                    position={[28.532, 16.244, 23.508]}
                    rotation={[0, 0, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books032_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books032_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books032_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books032_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books031" position={[28.46, 16.245, 23.516]} scale={0.986}>
                    <mesh
                        name="Books033_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books033_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books033_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books033_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books032" position={[28.403, 16.245, 23.516]} scale={0.986}>
                    <mesh
                        name="Books040_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books040_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books040_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books040_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books033"
                    position={[28.783, 16.548, 23.508]}
                    rotation={[0.006, 0, 0.006]}
                    scale={0.879}>
                    <mesh
                        name="Books041_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books041_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books041_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books041_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books034"
                    position={[28.733, 16.548, 23.508]}
                    rotation={[0.006, 0, 0.006]}
                    scale={0.879}>
                    <mesh
                        name="Books042_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books042_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books042_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books042_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books035"
                    position={[28.684, 16.548, 23.508]}
                    rotation={[0.006, 0, 0.006]}
                    scale={0.879}>
                    <mesh
                        name="Books043_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books043_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books043_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books043_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books036" position={[28.607, 16.552, 23.502]} rotation={[0, 0, -0.123]}>
                    <mesh
                        name="Books044_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books044_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books044_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books044_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books037" position={[28.548, 16.55, 23.502]} rotation={[0, 0, -0.123]}>
                    <mesh
                        name="Books045_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books045_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books045_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books045_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books038"
                    position={[25.601, 15.295, 20.286]}
                    rotation={[1.545, -1.541, 3.142]}
                    scale={1.327}>
                    <mesh
                        name="Books048_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books048_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books048_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books048_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books039" position={[32.736, 15.95, 18.41]} rotation={[0, 1.562, -0.123]}>
                    <mesh
                        name="Books049_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books049_1.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books049_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books049_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books040"
                    position={[32.75, 15.943, 18.262]}
                    rotation={[0, 1.562, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books050_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books050_1.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books050_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books050_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books041"
                    position={[32.744, 15.938, 18.188]}
                    rotation={[0, 1.562, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books051_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books051_1.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books051_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books051_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books042"
                    position={[32.75, 15.95, 18.327]}
                    rotation={[0, 1.562, 0]}
                    scale={1.086}>
                    <mesh
                        name="Books052_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books052_1.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books052_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books052_2.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books043"
                    position={[32.755, 15.949, 17.585]}
                    rotation={[0, 1.542, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books061"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books061.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books061_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books061_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books044"
                    position={[32.75, 16.386, 18.118]}
                    rotation={[0, 1.562, 0]}
                    scale={0.65}>
                    <mesh
                        name="Books062"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books062.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books062_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books062_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books045"
                    position={[32.75, 16.386, 18.074]}
                    rotation={[0, 1.562, 0]}
                    scale={0.65}>
                    <mesh
                        name="Books063"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books063.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books063_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books063_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books046"
                    position={[32.75, 16.386, 18.022]}
                    rotation={[0, 1.562, 0]}
                    scale={0.65}>
                    <mesh
                        name="Books064"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books064.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books064_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books064_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books047"
                    position={[32.755, 16.385, 17.974]}
                    rotation={[0, 1.542, 0]}
                    scale={0.664}>
                    <mesh
                        name="Books065"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books065.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books065_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books065_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books048"
                    position={[32.736, 16.391, 18.171]}
                    rotation={[0, 1.562, -0.123]}
                    scale={0.614}>
                    <mesh
                        name="Books066"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books066.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books066_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books066_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books049"
                    position={[32.769, 15.505, 18.197]}
                    rotation={[0, 1.542, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books067"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books067.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books067_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books067_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books050"
                    position={[32.764, 15.499, 18.122]}
                    rotation={[0, 1.542, 0.139]}
                    scale={0.879}>
                    <mesh
                        name="Books068"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books068.geometry}
                        material={materials.book1}
                    />
                    <mesh
                        name="Books068_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books068_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books051"
                    position={[32.769, 15.505, 18.25]}
                    rotation={[0, 1.542, 0]}
                    scale={0.947}>
                    <mesh
                        name="Books069"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books069.geometry}
                        material={materials.book4}
                    />
                    <mesh
                        name="Books069_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books069_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group name="Books052" position={[32.729, 15.504, 18.385]} rotation={[0, 1.529, -0.123]}>
                    <mesh
                        name="Books070"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books070.geometry}
                        material={materials.book2}
                    />
                    <mesh
                        name="Books070_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books070_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <group
                    name="Books053"
                    position={[32.746, 15.504, 18.303]}
                    rotation={[0, 1.529, 0]}
                    scale={1.086}>
                    <mesh
                        name="Books071"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books071.geometry}
                        material={materials.book3}
                    />
                    <mesh
                        name="Books071_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Books071_1.geometry}
                        material={materials['book page']}
                    />
                </group>
                <mesh
                    name="carpet001"
                    castShadow
                    receiveShadow
                    geometry={nodes.carpet001.geometry}
                    material={materials['carpet.002']}
                    position={[28.31, 14.374, 19.697]}
                    rotation={[0, -1.571, 0]}
                />
                <group
                    name="casset001"
                    position={[32.796, 14.642, 17.517]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.896, 1, 1]}>
                    <mesh
                        name="casset002"
                        castShadow
                        receiveShadow
                        geometry={nodes.casset002.geometry}
                        material={materials['weathered-black casset.002']}
                    />
                    <mesh
                        name="casset002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.casset002_1.geometry}
                        material={materials['metallic-white casset.002']}
                    />
                    <mesh
                        name="casset002_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.casset002_2.geometry}
                        material={materials['black old camera.004']}
                    />
                </group>
                <mesh
                    name="Chair_desk003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_desk003.geometry}
                    material={materials['chair desk.003']}
                    position={[26.451, 14.351, 19.503]}
                    rotation={[0, -1.571, 0]}
                />
                <group name="Chairs_model_002" position={[31.207, 14.392, 23.147]} rotation={[0, 0.345, 0]}>
                    <mesh
                        name="Chairs_model_002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chairs_model_002_1.geometry}
                        material={materials['Chairs model pink .002']}
                    />
                    <mesh
                        name="Chairs_model_002_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chairs_model_002_2.geometry}
                        material={materials['Chairs model dark-metal-mat chair .002']}
                    />
                </group>
                <group
                    name="Chairs_model_003"
                    position={[28.989, 14.392, 23.039]}
                    rotation={[0, -0.467, 0]}>
                    <mesh
                        name="Chairs_model_002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chairs_model_002_1.geometry}
                        material={materials['Chairs model pink .002']}
                    />
                    <mesh
                        name="Chairs_model_002_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chairs_model_002_2.geometry}
                        material={materials['Chairs model dark-metal-mat chair .002']}
                    />
                </group>
                <group
                    name="Computer&Mouse_interaction_v2001"
                    position={[25.735, 15.404, 19.503]}
                    rotation={[0, -1.571, 0]}>
                    <mesh
                        name="Computer&Mouse_interaction_v2004"
                        castShadow
                        receiveShadow
                        geometry={nodes['Computer&Mouse_interaction_v2004'].geometry}
                        material={materials['Computer&Mouse  white']}
                    />
                    <mesh
                        name="Computer&Mouse_interaction_v2004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes['Computer&Mouse_interaction_v2004_1'].geometry}
                        material={materials['computer-black interaction v2.002']}
                    />
                </group>
                <group
                    name="Computer&Mouse_interaction_v2002"
                    position={[25.486, 15.404, 19.468]}
                    rotation={[0, -1.571, 0]}>
                    <mesh
                        name="Computer&Mouse_interaction_v2005"
                        castShadow
                        receiveShadow
                        geometry={nodes['Computer&Mouse_interaction_v2005'].geometry}
                        material={materials['Computer&Mouse  white']}
                    />
                    <mesh
                        name="Computer&Mouse_interaction_v2005_1"
                        castShadow
                        receiveShadow
                        geometry={nodes['Computer&Mouse_interaction_v2005_1'].geometry}
                        material={materials['screen prom computer']}
                    />
                </group>
                <group
                    name="Computer&Mouse_interaction_v2003"
                    position={[25.672, 15.404, 18.712]}
                    rotation={[Math.PI, -1.135, Math.PI]}>
                    <mesh
                        name="Computer&Mouse_interaction_v2006"
                        castShadow
                        receiveShadow
                        geometry={nodes['Computer&Mouse_interaction_v2006'].geometry}
                        material={materials['Computer&Mouse  white']}
                    />
                    <mesh
                        name="Computer&Mouse_interaction_v2006_1"
                        castShadow
                        receiveShadow
                        geometry={nodes['Computer&Mouse_interaction_v2006_1'].geometry}
                        material={materials['screen prom computer']}
                    />
                </group>
                <group
                    name="Cube002"
                    position={[26.674, 14.728, 20.451]}
                    rotation={[-0.833, -1.081, -0.551]}
                    scale={[0.073, 0.088, 0.03]}>
                    <mesh
                        name="Cube062_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube062_1.geometry}
                        material={materials['book blue']}
                    />
                    <mesh
                        name="Cube062_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube062_2.geometry}
                        material={materials['book page 2']}
                    />
                </group>
                <group
                    name="Cube001"
                    position={[25.499, 16.069, 21.611]}
                    rotation={[0, -1.571, 0]}
                    scale={[1.269, 1, 0.048]}>
                    <mesh
                        name="Cube069_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube069_1.geometry}
                        material={materials['white board color']}
                    />
                    <mesh
                        name="Cube069_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube069_2.geometry}
                        material={materials['white board texture']}
                    />
                </group>
                <mesh
                    name="Cube004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials['script.001']}
                    position={[25.925, 15.205, 18.499]}
                    rotation={[-0.334, 1.554, 0.328]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005.geometry}
                    material={materials['script.001']}
                    position={[26.019, 15.248, 18.499]}
                    rotation={[1.517, 1.264, -1.536]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={materials['script.001']}
                    position={[26.019, 15.248, 18.706]}
                    rotation={[0.392, 0.664, -0.271]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <group
                    name="Cube009"
                    position={[26.345, 15.834, 23.432]}
                    rotation={[0, 1.571, 0]}
                    scale={[-0.142, -0.017, -0.178]}>
                    <mesh
                        name="Cube074_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube074_1.geometry}
                        material={materials['coffe machine dark grey']}
                    />
                    <mesh
                        name="Cube074_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube074_2.geometry}
                        material={materials['coffe machine light grey']}
                    />
                </group>
                <mesh
                    name="Cube010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials.credenza}
                    position={[26.704, 14.606, 23.284]}
                    rotation={[0, 1.571, 0]}
                    scale={[-0.366, -0.055, -0.583]}
                />
                <group
                    name="Cube011"
                    position={[26.035, 14.603, 18.021]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={0.242}>
                    <mesh
                        name="Cube095_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube095_1.geometry}
                        material={materials['grey metal ']}
                    />
                    <mesh
                        name="Cube095_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube095_2.geometry}
                        material={materials['dark grey metal']}
                    />
                </group>
                <mesh
                    name="Cube012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012.geometry}
                    material={materials['script.001']}
                    position={[25.93, 15.292, 17.939]}
                    rotation={[0, 1.571, 0]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013.geometry}
                    material={materials['script.001']}
                    position={[26.007, 15.327, 17.92]}
                    rotation={[Math.PI / 2, 1.373, -Math.PI / 2]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014.geometry}
                    material={materials['script.001']}
                    position={[25.928, 15.345, 18.106]}
                    rotation={[0.482, 0.649, -0.248]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015.geometry}
                    material={materials['script.001']}
                    position={[26.117, 15.329, 17.919]}
                    rotation={[2.87, 0.752, -2.953]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016.geometry}
                    material={materials['script.001']}
                    position={[26.242, 15.336, 18.098]}
                    rotation={[Math.PI / 2, 1.187, -Math.PI / 2]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube017"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube017.geometry}
                    material={materials.note}
                    position={[25.654, 15.195, 19.399]}
                    rotation={[Math.PI / 2, 1.506, -Math.PI / 2]}
                    scale={[-0.063, -0.012, -0.064]}
                />
                <mesh
                    name="Cube019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials.note}
                    position={[25.779, 15.195, 18.853]}
                    rotation={[0.098, 0.853, -0.074]}
                    scale={[-0.063, -0.012, -0.064]}
                />
                <mesh
                    name="Cube020"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020.geometry}
                    material={materials.note}
                    position={[25.915, 15.283, 19.962]}
                    rotation={[Math.PI / 2, 0.515, -Math.PI / 2]}
                    scale={[-0.045, -0.009, -0.046]}
                />
                <mesh
                    name="Cube021"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube021.geometry}
                    material={materials.note}
                    position={[26.238, 15.599, 20]}
                    rotation={[Math.PI / 2, 0.515, -Math.PI / 2]}
                    scale={[-0.045, -0.009, -0.046]}
                />
                <mesh
                    name="Cube022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube022.geometry}
                    material={materials.note}
                    position={[25.516, 16.289, 20.416]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024.geometry}
                    material={materials.note}
                    position={[25.516, 15.825, 20.651]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube027"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027.geometry}
                    material={materials.note}
                    position={[25.516, 15.69, 21.671]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030.geometry}
                    material={materials.note}
                    position={[25.516, 16.761, 21.693]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube031"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube031.geometry}
                    material={materials.note}
                    position={[25.516, 15.838, 22.553]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube063"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube063.geometry}
                    material={materials.note}
                    position={[25.516, 16.418, 22.772]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube064"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube064.geometry}
                    material={materials.note}
                    position={[25.517, 16.004, 22.035]}
                    rotation={[Math.PI / 2, 0.106, -Math.PI / 2]}
                    scale={[-0.083, -0.016, -0.085]}
                />
                <mesh
                    name="Cube075"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube075.geometry}
                    material={materials['box for things']}
                    position={[26.826, 15.871, 23.542]}
                    rotation={[0, 1.571, 0]}
                    scale={[-0.101, -0.047, -0.056]}
                />
                <mesh
                    name="Cube080"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080.geometry}
                    material={nodes.Cube080.material}
                    position={[26.825, 15.889, 23.616]}
                    rotation={[-1.298, 0, -Math.PI]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube081"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081.geometry}
                    material={nodes.Cube081.material}
                    position={[26.825, 15.889, 23.603]}
                    rotation={[-1.198, 0, -Math.PI]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube082"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082.geometry}
                    material={nodes.Cube082.material}
                    position={[26.825, 15.889, 23.596]}
                    rotation={[-1.198, 0, -Math.PI]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube083"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube083.geometry}
                    material={nodes.Cube083.material}
                    position={[26.825, 15.889, 23.589]}
                    rotation={[-1.198, 0, -Math.PI]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube084"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube084.geometry}
                    material={nodes.Cube084.material}
                    position={[26.825, 15.889, 23.582]}
                    rotation={[-1.198, 0, -Math.PI]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube085"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube085.geometry}
                    material={nodes.Cube085.material}
                    position={[26.825, 15.889, 23.453]}
                    rotation={[1.097, 0, 0]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube086"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube086.geometry}
                    material={nodes.Cube086.material}
                    position={[26.825, 15.889, 23.441]}
                    rotation={[1.198, 0, 0]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube087"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube087.geometry}
                    material={nodes.Cube087.material}
                    position={[26.825, 15.889, 23.433]}
                    rotation={[1.198, 0, 0]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube088"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube088.geometry}
                    material={nodes.Cube088.material}
                    position={[26.825, 15.889, 23.427]}
                    rotation={[1.198, 0, 0]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube089"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube089.geometry}
                    material={nodes.Cube089.material}
                    position={[26.825, 15.889, 23.419]}
                    rotation={[1.198, 0, 0]}
                    scale={[-0.045, -0.003, -0.049]}
                />
                <mesh
                    name="Cube090"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube090.geometry}
                    material={materials.note}
                    position={[27.122, 15.905, 23.461]}
                    rotation={[2.015, -0.271, 2.628]}
                    scale={[-0.038, -0.007, -0.039]}
                />
                <mesh
                    name="Cube076"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube076.geometry}
                    material={materials.note}
                    position={[25.517, 15.773, 19.501]}
                    rotation={[Math.PI / 2, 0.515, -Math.PI / 2]}
                    scale={[-0.045, -0.009, -0.046]}
                />
                <group
                    name="Cube100"
                    position={[28.126, 14.728, 23.13]}
                    rotation={[-0.833, -1.081, -0.551]}
                    scale={[0.073, 0.088, 0.03]}>
                    <mesh
                        name="Cube106_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube106_1.geometry}
                        material={materials['book blue']}
                    />
                    <mesh
                        name="Cube106_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube106_2.geometry}
                        material={materials['book page 2']}
                    />
                </group>
                <mesh
                    name="Cube101"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube101.geometry}
                    material={materials['script.001']}
                    position={[30.204, 15.211, 23.455]}
                    rotation={[1.46, 1.365, -1.296]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube105"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube105.geometry}
                    material={materials['script.001']}
                    position={[30.097, 15.244, 23.267]}
                    rotation={[0.392, 0.664, -0.271]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube106"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube106.geometry}
                    material={materials['script.001']}
                    position={[30.314, 15.235, 23.338]}
                    rotation={[2.87, 0.752, -2.953]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube113"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube113.geometry}
                    material={materials['script.001']}
                    position={[30.059, 15.207, 23.14]}
                    rotation={[-3.139, 1.035, 3.111]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube114"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube114.geometry}
                    material={materials['library wood.001']}
                    position={[25.607, 14.582, 16.762]}
                    rotation={[0, -1.571, 0]}
                    scale={0.089}
                />
                <mesh
                    name="Cube131"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube131.geometry}
                    material={materials['script.001']}
                    position={[32.778, 15.507, 17.768]}
                    rotation={[3.136, -1.327, 3.138]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube132"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube132.geometry}
                    material={materials['script.001']}
                    position={[32.778, 15.527, 17.86]}
                    rotation={[-0.434, -1.516, -0.631]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube133"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube133.geometry}
                    material={materials['script.001']}
                    position={[32.778, 15.527, 17.984]}
                    rotation={[-0.434, -1.516, -0.631]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube134"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube134.geometry}
                    material={materials['script.001']}
                    position={[27.43, 15.862, 23.193]}
                    rotation={[2.87, 0.752, -2.953]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cube135"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube135.geometry}
                    material={materials['script.001']}
                    position={[27.368, 15.835, 23.263]}
                    rotation={[3.114, 0.225, 3.131]}
                    scale={[-0.101, -0.012, -0.126]}
                />
                <mesh
                    name="Cylinder005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005.geometry}
                    material={materials.trash}
                    position={[26.615, 14.354, 20.377]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.166, 0.285, 0.166]}
                />
                <mesh
                    name="Cylinder007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder007.geometry}
                    material={materials['credenza feet']}
                    position={[26.307, 14.453, 22.713]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.037, 0.099, 0.037]}
                />
                <group
                    name="Cylinder008"
                    position={[26.491, 14.781, 20.412]}
                    rotation={[0.222, -1.571, 0]}
                    scale={0.006}>
                    <mesh
                        name="Cylinder043"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder043.geometry}
                        material={materials['drink red']}
                    />
                    <mesh
                        name="Cylinder043_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder043_1.geometry}
                        material={materials['drink white']}
                    />
                </group>
                <group
                    name="Cylinder009"
                    position={[26.027, 15.257, 20.285]}
                    rotation={[Math.PI, -0.986, Math.PI]}
                    scale={0.027}>
                    <mesh
                        name="Cylinder044"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder044.geometry}
                        material={materials['Material.042']}
                    />
                    <mesh
                        name="Cylinder044_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder044_1.geometry}
                        material={materials['21jumpStreet_interaction_v1.001']}
                    />
                </group>
                <mesh
                    name="Cylinder010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010.geometry}
                    material={materials.mug}
                    position={[25.838, 15.19, 19.959]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.052, 0.122, 0.052]}
                />
                <group
                    name="Cylinder011"
                    position={[25.844, 15.32, 19.931]}
                    rotation={[0.459, -1.033, 0.59]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder046"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder046.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder046_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder046_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <mesh
                    name="Cylinder012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012.geometry}
                    material={materials.mug}
                    position={[26.161, 15.194, 20.068]}
                    rotation={[-Math.PI, 1.113, -Math.PI]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <group
                    name="Cylinder013"
                    position={[25.832, 15.32, 19.984]}
                    rotation={[2.349, -1.292, 2.115]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder048"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder048.geometry}
                        material={materials['ping pen']}
                    />
                    <mesh
                        name="Cylinder048_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder048_1.geometry}
                        material={materials['yeloow pen']}
                    />
                </group>
                <group
                    name="Cylinder014"
                    position={[25.553, 15.527, 20.502]}
                    rotation={[-2.105, -1.095, -0.605]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder049"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder049.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder049_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder049_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder016"
                    position={[25.553, 15.527, 21.878]}
                    rotation={[-1.965, 1.13, -2.729]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder050"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder050.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder050_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder050_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder017"
                    position={[25.553, 15.527, 22.114]}
                    rotation={[-0.915, 1.05, 2.398]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder051"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder051.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder051_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder051_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <mesh
                    name="Cylinder018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018.geometry}
                    material={materials.mug}
                    position={[26.291, 15.819, 23.167]}
                    rotation={[0, -0.771, 0]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Cylinder019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder019.geometry}
                    material={materials.mug}
                    position={[26.63, 15.819, 23.553]}
                    rotation={[Math.PI, -0.066, Math.PI]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <group
                    name="Cylinder020"
                    position={[25.827, 15.32, 19.962]}
                    rotation={[0.23, 0.113, 0.163]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder054"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder054.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder054_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder054_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder021"
                    position={[25.681, 15.192, 19.222]}
                    rotation={[1.976, 0.237, 1.985]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder055"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder055.geometry}
                        material={materials['ping pen']}
                    />
                    <mesh
                        name="Cylinder055_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder055_1.geometry}
                        material={materials['yeloow pen']}
                    />
                </group>
                <group
                    name="Cylinder022"
                    position={[25.797, 15.194, 19.671]}
                    rotation={[0.05, 0.822, 1.527]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder056"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder056.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder056_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder056_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder023"
                    position={[25.564, 15.521, 20.93]}
                    rotation={[1.627, 0.466, 3.053]}
                    scale={[0.975, 1.483, 0.975]}>
                    <mesh
                        name="Cylinder057"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder057.geometry}
                        material={materials['ping pen']}
                    />
                    <mesh
                        name="Cylinder057_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder057_1.geometry}
                        material={materials['yeloow pen']}
                    />
                </group>
                <mesh
                    name="Cylinder024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024.geometry}
                    material={materials.mug}
                    position={[26.657, 15.819, 23.355]}
                    rotation={[Math.PI, -0.066, Math.PI]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Cylinder025"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025.geometry}
                    material={materials['pot for pen']}
                    position={[27.155, 15.826, 23.517]}
                    rotation={[0, 0.575, 0]}
                    scale={[0.044, 0.103, 0.044]}
                />
                <group
                    name="Cylinder026"
                    position={[27.133, 15.935, 23.526]}
                    rotation={[0.448, 1.021, -0.2]}
                    scale={[0.824, 1.254, 0.824]}>
                    <mesh
                        name="Cylinder060"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder060.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder060_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder060_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder027"
                    position={[27.176, 15.935, 23.509]}
                    rotation={[0.211, 0.369, -0.331]}
                    scale={[0.824, 1.254, 0.824]}>
                    <mesh
                        name="Cylinder061"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder061.geometry}
                        material={materials['ping pen']}
                    />
                    <mesh
                        name="Cylinder061_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder061_1.geometry}
                        material={materials['yeloow pen']}
                    />
                </group>
                <group
                    name="Cylinder028"
                    position={[27.163, 15.935, 23.523]}
                    rotation={[2.791, 0.849, -2.685]}
                    scale={[0.824, 1.254, 0.824]}>
                    <mesh
                        name="Cylinder062"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder062.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder062_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder062_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder029"
                    position={[27.136, 15.831, 23.298]}
                    rotation={[2.132, 1.255, -0.552]}
                    scale={[0.824, 1.254, 0.824]}>
                    <mesh
                        name="Cylinder063"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder063.geometry}
                        material={materials['blue pen']}
                    />
                    <mesh
                        name="Cylinder063_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder063_1.geometry}
                        material={materials['white pen']}
                    />
                </group>
                <group
                    name="Cylinder030"
                    position={[27.173, 15.841, 23.292]}
                    rotation={[1.035, 0.445, 0.678]}
                    scale={[0.824, 1.254, 0.824]}>
                    <mesh
                        name="Cylinder064"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder064.geometry}
                        material={materials['ping pen']}
                    />
                    <mesh
                        name="Cylinder064_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder064_1.geometry}
                        material={materials['yeloow pen']}
                    />
                </group>
                <group
                    name="Cylinder031"
                    position={[27.943, 14.781, 23.091]}
                    rotation={[0.222, -1.571, 0]}
                    scale={0.006}>
                    <mesh
                        name="Cylinder065"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder065.geometry}
                        material={materials['drink red']}
                    />
                    <mesh
                        name="Cylinder065_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder065_1.geometry}
                        material={materials['drink white']}
                    />
                </group>
                <mesh
                    name="Cylinder032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder032.geometry}
                    material={materials.trash}
                    position={[28.067, 14.354, 23.055]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.166, 0.285, 0.166]}
                />
                <mesh
                    name="Cylinder033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder033.geometry}
                    material={materials.mug}
                    position={[29.843, 15.196, 23.286]}
                    rotation={[Math.PI, -0.066, Math.PI]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Cylinder034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder034.geometry}
                    material={materials.mug}
                    position={[30.514, 15.196, 23.209]}
                    rotation={[Math.PI, -0.066, Math.PI]}
                    scale={[0.043, 0.095, 0.043]}
                />
                <mesh
                    name="Desk001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Desk001.geometry}
                    material={materials['brown desk .002']}
                    position={[25.948, 15.193, 19.494]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1.197, 1, 0.957]}
                />
                <mesh
                    name="Desk002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Desk002.geometry}
                    material={materials['brown desk .002']}
                    position={[30.178, 15.193, 23.173]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.385, 1, 0.957]}
                />
                <group
                    name="Door_interaction_v1001"
                    position={[33.025, 15.923, 20.911]}
                    rotation={[0, -1.571, 0]}
                    scale={4.053}>
                    <mesh
                        name="Door_interaction_v1003"
                        castShadow
                        receiveShadow
                        geometry={nodes.Door_interaction_v1003.geometry}
                        material={materials['door wood.001']}
                    />
                    <mesh
                        name="Door_interaction_v1003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Door_interaction_v1003_1.geometry}
                        material={materials['door black .001']}
                    />
                </group>
                <group
                    name="Door_interaction_v1002"
                    position={[30.166, 15.771, 23.73]}
                    rotation={[0, -0.005, 0]}
                    scale={4}>
                    <mesh
                        name="Door_interaction_v1004"
                        castShadow
                        receiveShadow
                        geometry={nodes.Door_interaction_v1004.geometry}
                        material={materials['door wood.001']}
                    />
                    <mesh
                        name="Door_interaction_v1004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Door_interaction_v1004_1.geometry}
                        material={materials['door black .001']}
                    />
                </group>

                <mesh
                    name="Icosphere005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere005.geometry}
                    material={materials['pepper trash']}
                    position={[28.166, 14.714, 22.956]}
                    rotation={[1.729, -1.252, 1.09]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere007.geometry}
                    material={materials['pepper trash']}
                    position={[26.714, 14.714, 20.277]}
                    rotation={[1.729, -1.252, 1.09]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere008.geometry}
                    material={materials['pepper trash']}
                    position={[26.569, 14.749, 20.355]}
                    rotation={[-1.239, -0.71, -1.572]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere009.geometry}
                    material={materials['pepper trash']}
                    position={[26.541, 14.714, 20.288]}
                    rotation={[-0.769, -1.042, -1.488]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere010.geometry}
                    material={materials['pepper trash']}
                    position={[26.62, 14.696, 20.508]}
                    rotation={[-0.955, -1.086, -0.768]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere011.geometry}
                    material={materials['pepper trash']}
                    position={[26.542, 14.714, 20.489]}
                    rotation={[Math.PI, -1.456, Math.PI]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere012.geometry}
                    material={materials['pepper trash']}
                    position={[26.624, 14.714, 20.242]}
                    rotation={[0.514, -0.58, -0.664]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere013.geometry}
                    material={materials['pepper trash']}
                    position={[26.499, 14.673, 20.327]}
                    rotation={[2.875, -0.396, -2.171]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere014.geometry}
                    material={materials['pepper trash']}
                    position={[26.633, 14.689, 20.337]}
                    rotation={[Math.PI / 2, -1.024, Math.PI / 2]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere015.geometry}
                    material={materials['pepper trash']}
                    position={[26.727, 14.689, 20.444]}
                    rotation={[Math.PI / 2, -1.024, Math.PI / 2]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere016.geometry}
                    material={materials['pepper trash']}
                    position={[28.021, 14.749, 23.033]}
                    rotation={[-1.239, -0.71, -1.572]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere017"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere017.geometry}
                    material={materials['pepper trash']}
                    position={[27.993, 14.714, 22.966]}
                    rotation={[-0.769, -1.042, -1.488]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere018.geometry}
                    material={materials['pepper trash']}
                    position={[28.072, 14.696, 23.186]}
                    rotation={[-0.955, -1.086, -0.768]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere019.geometry}
                    material={materials['pepper trash']}
                    position={[27.994, 14.714, 23.167]}
                    rotation={[Math.PI, -1.456, Math.PI]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere020"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere020.geometry}
                    material={materials['pepper trash']}
                    position={[28.076, 14.714, 22.92]}
                    rotation={[0.514, -0.58, -0.664]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere021"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere021.geometry}
                    material={materials['pepper trash']}
                    position={[27.95, 14.673, 23.005]}
                    rotation={[2.875, -0.396, -2.171]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere022.geometry}
                    material={materials['pepper trash']}
                    position={[28.085, 14.689, 23.016]}
                    rotation={[Math.PI / 2, -1.024, Math.PI / 2]}
                    scale={0.057}
                />
                <mesh
                    name="Icosphere023"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere023.geometry}
                    material={materials['pepper trash']}
                    position={[28.179, 14.689, 23.123]}
                    rotation={[Math.PI / 2, -1.024, Math.PI / 2]}
                    scale={0.057}
                />
                <group name="Lamp-shade007" position={[32.036, 14.362, 17.105]} rotation={[0, -1.571, 0]}>
                    <mesh
                        name="Lamp-shade004"
                        castShadow
                        receiveShadow
                        geometry={nodes['Lamp-shade004'].geometry}
                        material={materials['BulbEmission Lamp-shade.003']}
                    />
                    <mesh
                        name="Lamp-shade004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes['Lamp-shade004_1'].geometry}
                        material={materials['dark-metal-mat Lamp-shade.003']}
                    />
                </group>
                <group
                    name="leaf002"
                    position={[26.057, 15.675, 17.386]}
                    rotation={[0.365, 1.209, -0.624]}
                    scale={0.153}>
                    <mesh
                        name="leaf004"
                        castShadow
                        receiveShadow
                        geometry={nodes.leaf004.geometry}
                        material={materials['Leaf.004']}
                    />
                    <mesh
                        name="leaf004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.leaf004_1.geometry}
                        material={materials['pot.002']}
                    />
                    <mesh
                        name="leaf004_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.leaf004_2.geometry}
                        material={materials['Stem.002']}
                    />
                </group>
                <group
                    name="leaf003"
                    position={[32.315, 15.708, 22.938]}
                    rotation={[0.365, 1.209, -0.624]}
                    scale={0.153}>
                    <mesh
                        name="leaf005"
                        castShadow
                        receiveShadow
                        geometry={nodes.leaf005.geometry}
                        material={materials['Leaf.004']}
                    />
                    <mesh
                        name="leaf005_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.leaf005_1.geometry}
                        material={materials['pot.002']}
                    />
                    <mesh
                        name="leaf005_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.leaf005_2.geometry}
                        material={materials['Stem.002']}
                    />
                </group>
                <mesh
                    name="library001"
                    castShadow
                    receiveShadow
                    geometry={nodes.library001.geometry}
                    material={materials['library wood.001']}
                    position={[32.796, 14.642, 17.53]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.875, 1, 1]}
                />
                <mesh
                    name="lobby_all_static_objects021"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects021.geometry}
                    material={materials['surounding wood.003']}
                    position={[30.906, 16.353, 23.627]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.27}
                />
                <mesh
                    name="lobby_all_static_objects022"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects022.geometry}
                    material={materials['surounding wood.003']}
                    position={[32.1, 16.353, 23.627]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.27}
                />
                <mesh
                    name="lobby_all_static_objects023"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects023.geometry}
                    material={materials['surounding wood.003']}
                    position={[26.878, 16.661, 23.627]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.27}
                />
                <mesh
                    name="lobby_all_static_objects024"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects024.geometry}
                    material={materials['surounding wood.003']}
                    position={[29.85, 16.353, 23.627]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.27}
                />
                <mesh
                    name="lobby_all_static_objects025"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects025.geometry}
                    material={materials['surounding wood.003']}
                    position={[25.456, 16.53, 18.821]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.27}
                />
                <mesh
                    name="lobby_all_static_objects026"
                    castShadow
                    receiveShadow
                    geometry={nodes.lobby_all_static_objects026.geometry}
                    material={materials['surounding wood.003']}
                    position={[25.456, 16.576, 17.708]}
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={0.27}
                />
                <group
                    name="music_table_interaction_v2001"
                    position={[30.472, 15.153, 17.128]}
                    rotation={[Math.PI, -0.169, Math.PI]}>
                    <mesh
                        name="music_table_interaction_v2002"
                        castShadow
                        receiveShadow
                        geometry={nodes.music_table_interaction_v2002.geometry}
                        material={materials['dark-metal-mat chair music table interaction v2.002']}
                    />
                    <mesh
                        name="music_table_interaction_v2002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.music_table_interaction_v2002_1.geometry}
                        material={materials['computer-white music table interaction v2.002']}
                    />
                    <mesh
                        name="music_table_interaction_v2002_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.music_table_interaction_v2002_2.geometry}
                        material={materials['office wall  music table interaction v2.002']}
                    />
                    <mesh
                        name="music_table_interaction_v2002_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.music_table_interaction_v2002_3.geometry}
                        material={materials['office-blue music table interaction v2.002']}
                    />
                    <mesh
                        name="music_table_interaction_v2002_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.music_table_interaction_v2002_4.geometry}
                        material={materials['black desk music table interaction v2.002']}
                    />
                </group>
                <mesh
                    name="Notice_Board_frame001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Notice_Board_frame001.geometry}
                    material={materials['Notice Board frame.002']}
                    position={[29.785, 16.478, 16.809]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={0.719}
                />
                <group
                    name="old_camera013"
                    position={[32.701, 16.139, 17.883]}
                    rotation={[Math.PI, -0.566, Math.PI]}
                    scale={0.204}>
                    <mesh
                        name="old_camera014_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera014_1.geometry}
                        material={materials['weathered-black old camera.002']}
                    />
                    <mesh
                        name="old_camera014_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera014_2.geometry}
                        material={materials['black old camera.004']}
                    />
                </group>
                <group
                    name="old_camera014"
                    position={[25.601, 15.333, 19.111]}
                    rotation={[0, 0.691, 0]}
                    scale={0.135}>
                    <mesh
                        name="old_camera016_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera016_1.geometry}
                        material={materials['weathered-black old camera.002']}
                    />
                    <mesh
                        name="old_camera016_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera016_2.geometry}
                        material={materials['black old camera.004']}
                    />
                </group>
                <group
                    name="old_camera015"
                    position={[28.203, 16.381, 23.559]}
                    rotation={[-Math.PI, 1.295, -Math.PI]}
                    scale={0.144}>
                    <mesh
                        name="old_camera001"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera001.geometry}
                        material={materials['weathered-black old camera.002']}
                    />
                    <mesh
                        name="old_camera001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera001_1.geometry}
                        material={materials['black old camera.004']}
                    />
                </group>
                <group
                    name="old_camera016"
                    position={[28.725, 16.381, 23.559]}
                    rotation={[0, 1.093, 0]}
                    scale={0.144}>
                    <mesh
                        name="old_camera017"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera017.geometry}
                        material={materials['weathered-black old camera.002']}
                    />
                    <mesh
                        name="old_camera017_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.old_camera017_1.geometry}
                        material={materials['black old camera.004']}
                    />
                </group>
                <mesh
                    name="Shelves003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Shelves003.geometry}
                    material={materials['black Shelves.002']}
                    position={[28.461, 16.205, 23.502]}
                    rotation={[0, -1.571, 0]}
                />
                <group
                    name="Structure001"
                    position={[28.661, 14.351, 19.836]}
                    rotation={[0, -1.571, 0]}
                    scale={4}>
                    <mesh
                        name="Structure006"
                        castShadow
                        receiveShadow
                        geometry={nodes.Structure006.geometry}
                        material={materials['floor wood.001']}
                    />
                    <mesh
                        name="Structure006_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Structure006_1.geometry}
                        material={materials['office wall .001']}
                    />
                    <mesh
                        name="Structure006_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Structure006_2.geometry}
                        material={materials['glass.004']}
                    />
                    <mesh
                        name="Structure006_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Structure006_3.geometry}
                        material={materials.ceiling}
                    />
                </group>
                <mesh
                    name="surounding_wood001"
                    castShadow
                    receiveShadow
                    geometry={nodes.surounding_wood001.geometry}
                    material={materials['surounding wood.004']}
                    position={[25.457, 17.476, 20.434]}
                    rotation={[Math.PI, 1.571, 0]}
                />
                <mesh
                    name="surounding_wood003"
                    castShadow
                    receiveShadow
                    geometry={nodes.surounding_wood003.geometry}
                    material={materials['surounding wood.004']}
                    position={[25.457, 14.388, 20.434]}
                    rotation={[Math.PI, -1.571, 0]}
                    scale={-1}
                />
                <mesh
                    name="top_light002"
                    castShadow
                    receiveShadow
                    geometry={nodes.top_light002.geometry}
                    material={materials['top light']}
                    position={[26.926, 17.499, 19.836]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    name="top_light003"
                    castShadow
                    receiveShadow
                    geometry={nodes.top_light003.geometry}
                    material={materials['top light']}
                    position={[30.559, 17.499, 19.836]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    name="EyeLeft002"
                    castShadow
                    receiveShadow
                    geometry={nodes.EyeLeft002.geometry}
                    material={materials.Wolf3D_Eye}
                    morphTargetDictionary={nodes.EyeLeft002.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeLeft002.morphTargetInfluences}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="EyeRight002"
                    castShadow
                    receiveShadow
                    geometry={nodes.EyeRight002.geometry}
                    material={materials.Wolf3D_Eye}
                    morphTargetDictionary={nodes.EyeRight002.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeRight002.morphTargetInfluences}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Body001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Body001.geometry}
                    material={materials.Wolf3D_Body}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Glasses001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Glasses001.geometry}
                    material={materials.Wolf3D_Glasses}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Hair001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Hair001.geometry}
                    material={materials.Wolf3D_Hair}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Head001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Head001.geometry}
                    material={materials.Wolf3D_Skin}
                    morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Outfit_Bottom001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
                    material={materials['Wolf3D_Outfit_Bottom.002']}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Outfit_Footwear001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
                    material={materials.Wolf3D_Outfit_Footwear}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Outfit_Top001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Outfit_Top001.geometry}
                    material={materials['Wolf3D_Outfit_Top.001']}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Wolf3D_Teeth001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Wolf3D_Teeth001.geometry}
                    material={materials.Wolf3D_Teeth}
                    morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
                    position={[34.896, 3.863, 28.231]}
                    rotation={[Math.PI / 2, 0, 1.392]}
                    scale={0.01}
                />
                <mesh
                    name="Koyla_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Koyla_interaction_posters_v1001.geometry}
                    material={materials['Koyla interaction posters v1.002']}
                    position={[25.454, 16.578, 17.703]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={0.757} />
                <mesh
                    name="21-Jump-Street_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes['21-Jump-Street_interaction_posters_v1001'].geometry}
                    material={materials['21-Jump-Street interaction posters v1.002']}
                    position={[32.144, 16.395, 23.641]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={0.712} />
                <mesh
                    name="Back-To-The-Future_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes['Back-To-The-Future_interaction_posters_v1001'].geometry}
                    material={materials['Back-To-The-Future interaction posters v1.002']}
                    position={[30.898, 16.355, 23.646]}
                    rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh
                    name="Bad-Boys_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes['Bad-Boys_interaction_posters_v1001'].geometry}
                    material={materials['Bad-Boys interaction posters v1.002']}
                    position={[26.874, 16.655, 23.645]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={0.862} />
                <mesh
                    name="Ferrari_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ferrari_interaction_posters_v1001.geometry}
                    material={materials['Ferrari interaction posters v1.002']}
                    position={[29.833, 16.342, 23.636]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={0.76} />
                <mesh
                    name="Gun-Shy_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes['Gun-Shy_interaction_posters_v1001'].geometry}
                    material={materials['Gun-Shy interaction posters v1.002']}
                    position={[25.444, 16.538, 18.823]}
                    rotation={[Math.PI / 2, 0, Math.PI]} />
                <mesh
                    name="Scrip_board_screen_1_interaction_posters_v1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Scrip_board_screen_1_interaction_posters_v1001.geometry}
                    material={materials['Scrip_board_screen_1 interaction posters v1.002']}
                    position={[29.775, 16.483, 16.826]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.363} />
                <mesh
                    onPointerEnter={scriptBoardPointerEnter}
                    onPointerLeave={scriptBoardPointerLeave}
                    onClick={() => store.popupOpen = true}
                    name="scriptBoard_interaction_v1"
                    castShadow
                    receiveShadow
                    geometry={nodes.scriptBoard_interaction_v1.geometry}
                    material={materials.scriptBoard_interaction_v1}
                    position={[29.185, 5.613, 15.362]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.29} >
                    {scriptBoardHovered && <meshBasicMaterial map={materials.scriptBoard_interaction_v1.map} color={[3, 1, 3]} side={THREE.DoubleSide} toneMapped={false} />}

                    <mesh scale={[8.5, 5, 2]} position={[0.01, 0.05, 0]} rotation-x={Math.PI * 0.5} >
                        <ringGeometry args={[0.9, 1.01, 4, 4, 2.36]} />
                        <meshBasicMaterial side={THREE.DoubleSide} color={'#B59B84'} toneMapped={false} />
                    </mesh>
                    {scriptBoardHovered &&
                        <mesh scale={[8.1, 4.75, 2]} position={[0.01, 0.1, 0]} rotation-x={Math.PI * 0.5} >
                            <ringGeometry args={[0.98, 1.03, 4, 5, 2.36]} />
                            <meshStandardMaterial emissiveIntensity={scriptBoardHovered ? 3 : 0} side={THREE.DoubleSide} color={[1, 1, 3]} emissive={[1, 1, 3]} toneMapped={false} />
                        </mesh>
                    }
                </mesh>
            </group>
            {postersBottom.map((poster) => (
                <Poster key={poster.id} data={poster} />
            ))}

            {postersTop.map((poster) => (
                <Poster key={poster.id} data={poster} />
            ))}
        </group>
    )
}

useGLTF.preload('/models/lobby.glb')
