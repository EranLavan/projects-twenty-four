import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NewBrunswick from './NewBrunswick';
import Newfoundland from './Newfoundland';
import Northwest from './Northwest';
import NovaScotia from './NovaScotia';
import Nunavut from './Nunavut';
import PrinceEdward from './PrinceEdward';
import Saskatchewan from './Saskatchewan';
import Yukon from './Yukon';
import './Edge.css';

function Edge() {
  const location = useLocation();
  const isRootPath = location.pathname === '/edge';

  return (
    <div className='container'>
      <Routes>
        <Route path="NewBrunswick" element={<NewBrunswick />} />
        <Route path="newfoundland" element={<Newfoundland />} />
        <Route path="Northwest" element={<Northwest />} />
        <Route path="NovaScotia" element={<NovaScotia />} />
        <Route path="Nunavut" element={<Nunavut />} />
        <Route path="PrinceEdward" element={<PrinceEdward />} />
        <Route path="Saskatchewan" element={<Saskatchewan />} />
        <Route path="Yukon" element={<Yukon />} />
      </Routes>

      {isRootPath && (
        <>
        

      <h3 className='header'>
        Echoes wandering down an endless meadow... Sublime
      </h3>

      <div className='inner-container'>



        <div className='newfoundland'>
          <a href='./#/edge/newfoundland'>
            <img className='main-image' src='https://images.unsplash.com/photo-1592973675745-d1ab9cecc0b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          </a>
          <p className='caption'>Newfoundland and Labrador</p>
        </div>


        <div className='northwest'>
          <img className='main-image'></img>
          <p className='caption'>Northwest Territories</p>
        </div>


        <div className='new-brunswick'>
          <img className='main-image'></img>
          <p className='caption'>New Brunswick</p>
        </div>


        <div className='nunavut'>
          <img className='main-image'></img>
          <p className='caption'>Nunavut</p>
        </div>


        <div className='nova-scotia'>
          <img className='main-image'></img>
          <p className='caption'>Nova Scotia</p>
        </div>


        <div className='yukon'>
          <img className='main-image'></img>
          <p className='caption'>Yukon</p>
        </div>


        <div className='saskatchewan'>
          <img className='main-image'></img>
          <p className='caption'>Saskatchewan</p>
        </div>


        <div className='prince-edward'>
          <img className='main-image'></img>
          <p className='caption'>Prince Edward Island</p>
        </div>


      </div>
      </>
      )}
    </div>
  );
}

export default Edge
