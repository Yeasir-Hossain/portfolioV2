import { useTheme } from "next-themes";
import React, { useState } from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

function Particle() {
    const { systemTheme, theme } = useTheme()
    const [particlecolor, setParticlecolor] = useState("f1f1f1")
    const currenttheme = theme === 'system' ? systemTheme : theme
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        if (currenttheme === 'dark') {
            setParticlecolor("f1f1f1")
        }
        else {
            setParticlecolor("000000")
        }
    };



    return (
        <div className="-z-50 absolute">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: true
                        },
                    },
                    particles: {
                        color: {
                            value: particlecolor
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080
                            },
                            limit: 0,
                            value: 500,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 2,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        shape: {
                            type: 'circle',

                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5
                            },
                            value: 1.5
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.05,
                            straight: false,
                        },
                    }
                }}
            />
        </div>
    );
}
export default Particle;