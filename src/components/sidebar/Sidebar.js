import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {

    const [selectedId, setSelectedId] = useState("home")

    const sideBarData = {
        mainTabs: [
            {
                head: "Home",
                icon: "home"
            },
            {
                head: "Explorar",
                icon: "explore"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Inscrito",
                icon: "subscriptions"
            },
        ],
        externalTabs: [
            {
                head: "Biblioteca",
                icon: "video_library"
            },
            {
                head: "Histórico",
                icon: "history"
            },
            {
                head: "Seus Vídeos",
                icon: "smart_display"
            },
            {
                head: "Ver mais tarde",
                icon: "browse_gallery"
            },
            {
                head: "Vídeos que gostou",
                icon: "thumb_up_off"
            },
        ],
        explore: [
            {
                head: "Filmes",
                icon: "theaters"
            },
            {
                head: "Jogos",
                icon: "sports_esports"
            },
            {
                head: "Live",
                icon: "sensors"
            },
            {
                head: "Moda",
                icon: "styler"
            },
            {
                head: "Aprendizagem",
                icon: "lightbulb"
            },
            {
                head: "Esportes",
                icon: "sports_soccer"
            },
        ],
        moreYoutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
                "name": "Premium"
            },
            {
                "logo": "https://img.utdstc.com/icon/da1/075/da10758eb49eee15e14de4b0d4ac121ad41f44878ef403c6f8af704a8d7b4f49:200",
                "name": "Studio"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
                "name": "Music"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
                "name": "Kids"
            },
        ],
        settings: [
            {
                head: "Definições",
                icon: "settings"
            },
            {
                head: "Histórico de denúncias",
                icon: "flag"
            },
            {
                head: "Ajuda",
                icon: "help"
            },
            {
                head: "Enviar feedback",
                icon: "sms_failed"
            },
        ]
    }

    return (
        <>
            <div className="sidebarSection close" id='sidebarContainer'>
                <div className="miniSidebar" id='miniSidebar'>
                    {sideBarData.mainTabs.map((tab,i) => {
                        return <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                            <span className='material-symbols-rounded'>{tab.icon}</span>
                            <p>{tab.head}</p>
                        </div>
                    })}
                </div>
                <div className="sidebarContainer" id='sidebarContainer'>
                    <div className="sideBarTabs">
                        <div className="tabContainer">
                            {sideBarData.mainTabs.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.externalTabs.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="explore">
                            <h2 className="mainSidebarHead">Explorar</h2>
                            {sideBarData.explore.map((tab) => {
                                return <div className="sidebarTab" key={tab.head}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="moreYoutube">
                            <h2 className="mainSidebarHead">Mais opções</h2>
                            {sideBarData.moreYoutubes.map((tab) => {
                                return <div className="youtubeTabs" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.settings.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar