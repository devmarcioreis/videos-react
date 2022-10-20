import React, { useState } from 'react'
import './navbar.css'
import { WhiteLogo } from '../../assets/ImageIndex'
import { Avatar } from '../../assets/ImageIndex'
import { TfiClose } from 'react-icons/tfi'
import { FaSearch, FaMicrophoneAlt, FaGlobeAmericas } from 'react-icons/fa'
import { AiOutlinePlusSquare, AiOutlineBell, AiOutlinePlayCircle, AiOutlineDollarCircle, AiOutlineSetting } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { IoMdLogOut } from 'react-icons/io'
import { RiAdminLine, RiFeedbackLine } from 'react-icons/ri'
import { MdOutlineAdminPanelSettings, MdOutlineHelpOutline } from 'react-icons/md' 


function Navbar() {

  const [openNav, setOpenNav] = useState(false)
  const [search, setSearch] = useState("")

  const handleSidebar = ()=>{
    const sidebarContainer = document.getElementById('sidebarContainer');
    sidebarContainer.classList.toggle('close')
}

  return (
    <>
      <header>
        <div className='header'>
          <div>
            <div className='hamburger'>
            <div onClick={handleSidebar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <img src={WhiteLogo} alt='Logo' title='Videos React' />
            <h2>Vídeos</h2>
          </div>
          <div className='searchContainer'>
            <div className='searchBox'>
              <input type='text' placeholder='Buscar vídeo'  value={search} onChange={(e) => setSearch(e.target.value)} />
              {search !== "" && <span onClick={() => setSearch("")}>
                <TfiClose />
              </span>}
            </div>
            <div className='searchBtn'>
              <span>
                <FaSearch />
              </span>
            </div>
            <div className='searchMic'>
              <span>
                <FaMicrophoneAlt />
              </span>
            </div>
          </div>
          <div className='profileContainer'>
            <span>
                <AiOutlinePlusSquare />
            </span>
            <span>
                <AiOutlineBell />
            </span>
            <img src={Avatar} alt='Avatar' title='Foto de peril' onClick={() => setOpenNav(!openNav)}/>
          </div>
        </div>
        {openNav && <div className='profileBtns'>
            <div className='avatarInfo profileTab'>
              <img src={Avatar} alt='Avatar' title='Foto de peril' />
              <p>Márcio Reis</p>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
                <span>
                  <BiUserCircle />
                </span>
                <p>Meu Canal</p>
              </div>
              <div className='profileTab'>
                <span>
                  <AiOutlinePlayCircle />
                </span>
                <p>Vídeo Studio</p>
              </div>
              <div className='profileTab'>
                <span>
                  <IoMdLogOut />
                </span>
                <p>Sair</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span>
                  <AiOutlineDollarCircle />
              </span>
              <p>Compras e subscrições</p>
              </div>
              <div className='profileTab'>
              <span>
                  <RiAdminLine />
              </span>
              <p>Seus dados</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span>
                 <MdOutlineAdminPanelSettings />
              </span>
              <p>Modo Restrito</p>
              </div>
              <div className='profileTab'>
              <span>
                  <FaGlobeAmericas />
              </span>
              <p>Localização</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span>
                 <AiOutlineSetting />
              </span>
              <p>Configurações</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span>
                 <MdOutlineHelpOutline />
              </span>
              <p>Ajuda</p>
              </div>
              <div className='profileTab'>
              <span>
                  <RiFeedbackLine />
              </span>
              <p>Enviar feedback</p>
              </div>
            </div>
          </div>}
      </header>
    </>
  )
}

export default Navbar