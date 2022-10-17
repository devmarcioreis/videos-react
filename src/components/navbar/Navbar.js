import React from 'react'
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
  return (
    <>
      <header>
        <div className='header'>
          <div>
            <div className='hamburger'>
              <div>
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
              <input type='text' placeholder='Buscar vídeo' />
              <span className='material-symbols-rounded'>
                <TfiClose />
              </span>
            </div>
            <div className='searchBtn'>
              <span className='material-symbols-rounded'>
                <FaSearch />
              </span>
            </div>
            <div className='searchMic'>
              <span className='material-symbols-rounded active'>
                <FaMicrophoneAlt />
              </span>
            </div>
          </div>
          <div className='profileContainer'>
            <span className='material-symbols-rounded'>
                <AiOutlinePlusSquare />
            </span>
            <span className='material-symbols-rounded'>
                <AiOutlineBell />
            </span>
            <img src={Avatar} alt='Avatar' title='Foto de peril' />
          </div>
        </div>
        <div className='profileBtns'>
            <div className='avatarInfo profileTab'>
              <img src={Avatar} alt='Avatar' title='Foto de peril' />
              <p>Márcio Reis</p>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
                <span className='material-symbols-rounded active'>
                  <BiUserCircle />
                </span>
                <p>Meu Canal</p>
              </div>
              <div className='profileTab'>
                <span className='material-symbols-rounded active'>
                  <AiOutlinePlayCircle />
                </span>
                <p>Vídeo Studio</p>
              </div>
              <div className='profileTab'>
                <span className='material-symbols-rounded active'>
                  <IoMdLogOut />
                </span>
                <p>Sair</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                  <AiOutlineDollarCircle />
              </span>
              <p>Compras e subscrições</p>
              </div>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                  <RiAdminLine />
              </span>
              <p>Seus dados</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                 <MdOutlineAdminPanelSettings />
              </span>
              <p>Modo Restrito</p>
              </div>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                  <FaGlobeAmericas />
              </span>
              <p>Localização</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                 <AiOutlineSetting />
              </span>
              <p>Configurações</p>
              </div>
            </div>
            <div className='horizontalLine'></div>
            <div className='profileTabs'>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                 <MdOutlineHelpOutline />
              </span>
              <p>Ajuda</p>
              </div>
              <div className='profileTab'>
              <span className='material-symbols-rounded active'>
                  <RiFeedbackLine />
              </span>
              <p>Enviar feedback</p>
              </div>
            </div>
          </div>
      </header>
    </>
  )
}

export default Navbar