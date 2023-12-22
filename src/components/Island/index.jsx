import React , { useState , useEffect , useRef } from 'react'
import './Island.scss'

import ContentModal from '../../components/ContentModal'
import NavMobile from '../../components/NavMobile'
import Social from '../../components/Social'
import ModelViewer from '../../components/ModelViewer'
import GamePlays from '../GamePlays'
// import Menu from '../Menu'

export default function Island() {
    const [status,setStatus] = useState("")
    const [name,setName] = useState("")

    const [rotateStatusGlobal,setRotateStatusGlobal] = useState(false)

    const [statusNavMobile,setStatusNavMobile] = useState("active")

    const model = useRef(null);
    const navMobile = useRef(null);

    const handleShowModal = (nameDataset) => {
        setName(nameDataset)
        setStatusNavMobile(" ")
        setTimeout(() => {
            setStatus("active")
        },500)
    }

    useEffect(() => {
        // handle loading
        const onProgress = (event) => {
            const progressBar = event.target.querySelector('.progress-bar');
            const updatingBar = event.target.querySelector('.update-bar');

            updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

            if (event.detail.totalProgress === 1) {
                progressBar.classList.add('hide');
                modelViewer.querySelectorAll('button').forEach((hotspot) => {
                    hotspot.style.opacity = 1;
                });

                // init camera animation
                const orbitCycle = [
                    '-180deg -180deg 100%',
                    modelViewer.cameraOrbit
                ];

                const animationCamera = setInterval(() => {
                    const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
                    modelViewer.cameraOrbit =
                        orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];

                    if(currentOrbitIndex===0){
                        clearInterval(animationCamera);
                    }
                }, 1000);


            } 
            else {
                progressBar.classList.remove('hide');

                modelViewer.querySelectorAll('button').forEach((hotspot) => {
                    hotspot.style.opacity = 0;
                });

                if (event.detail.totalProgress === 0) {
                    event.target.querySelector('.center-pre-prompt')?.classList.add('hide');
                }
            }
        };

        document.querySelector('model-viewer').addEventListener('progress', onProgress);

        const modelViewer =  model.current;

        modelViewer.addEventListener("load", () => {
            const snow = modelViewer.model.materials[1];
            const rockStone = modelViewer.model.materials[3];
            const lamp =  modelViewer.model.materials[44];
            const bellLights =  modelViewer.model.materials[63];

            const createTexture = async () => {
                // set snow part :
                snow.pbrMetallicRoughness.setMetallicFactor(1.5);

                // set rock stone part :
                rockStone.pbrMetallicRoughness.setMetallicFactor(1.5);

                // set bell light part :
                setInterval(() => {
                    bellLights.pbrMetallicRoughness.setBaseColorFactor("#ff0000");
                },1200)

                setInterval(() => {
                    bellLights.pbrMetallicRoughness.setBaseColorFactor("#fff700");
                },2400)

                // set lamp light part :
                setInterval(() => {
                    lamp.pbrMetallicRoughness.setBaseColorFactor("#ffe600");
                },500)

                setInterval(() => {
                    lamp.pbrMetallicRoughness.setBaseColorFactor("#ffffff");
                },1000)
            }
            createTexture()
        })

        // handle onclick
        const annotationClicked = (annotation) => {
            let dataset = annotation.dataset;
            modelViewer.cameraTarget = dataset.target;
            modelViewer.cameraOrbit = dataset.orbit;
            modelViewer.fieldOfView = '45deg';

            handleShowModal(dataset.name)
        }

        modelViewer.querySelectorAll('.Hotspot').forEach((hotspot) => {
            hotspot.onclick = () => {
                annotationClicked(hotspot)
            };
        });

        // handle nav mobile
        navMobile?.current?.querySelectorAll('.nav-mobile-item').forEach((hotspot) => {
            hotspot.onclick = () => {
                annotationClicked(hotspot)
            };
        });

        const handleBack = () => {
            modelViewer.cameraTarget = "0 0 0";
            modelViewer.cameraOrbit = "0 0 0";
            modelViewer.fieldOfView = '45deg';

            setName("")

            setStatus("")
            setStatusNavMobile("active")
        }

        const btnBack = document.querySelector(".btn-back");
        btnBack.onclick = () => {
            handleBack()
        }

    },[])

    return (
        <div className="island">

            <div className="main-banner">
                <img src="./images/banner.png" alt="" />
            </div>

            <ModelViewer model={model} rotateStatus={rotateStatusGlobal}/>
            
            <ContentModal status={status} name={name}/>

            <NavMobile statusNavMobile={statusNavMobile} navMobile={navMobile}/>

            <Social status={statusNavMobile}/>

            <GamePlays name={name}/>

            {/* <Menu setRotateStatusGlobal={setRotateStatusGlobal} rotateStatusGlobal={rotateStatusGlobal}/> */}
        </div>
    )
}
