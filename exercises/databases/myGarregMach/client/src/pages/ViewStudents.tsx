import { useNavigate } from "react-router";
import { GMButton } from "../components/GMButton/GMButton";
import { MainBlock } from "../components/MainBlock/MainBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { StudentCard } from "../components/ViewStudents/StudentCard";

import '../css/ViewStudents.css';

export function ViewStudents() {
  const navgiate = useNavigate();

  function navBack() {
      navgiate('/staffProfile');
  }

  const studentData = [
      {
          "name": "Lysithea Von Ordelia",
          "degree": "Doctorate of Magical Arts",
          "house": "golden_deer",
          "profileUrl": "https://i.imgur.com/2GALLY6.png",
          "password": "studiousmage"
      },
      {
          "name": "Hilda Valentine Gonereil",
          "degree": "Bachelor of Wyvern Aviation",
          "house": "golden_deer",
          "profileUrl": "https://i.imgur.com/mqFH3Zk.png",
          "password": "lazybrigand"
      },
      {
          "name": "Dimitri Alexandre Blaiddyd",
          "degree": "Bachelor of Combative Arts",
          "house": "blue_lions",
          "profileUrl": "https://i.imgur.com/Mfody4E.png",
          "password": "bravelion"
      },
      {
          "name": "Sylvain Jose Gautier",
          "degree": "Bachelor of Meelee Combats",
          "house": "blue_lions",
          "profileUrl": "https://i.imgur.com/o4QnaS4.png",
          "password": "charmingknight"
      },
      {
          "name": "Dorothea Arnault",
          "degree": "Diploma of Magical Arts",
          "house": "black_eagles",
          "profileUrl": "https://i.imgur.com/4hYjk2t.png",
          "password": "melodicsinger"
      },
      {
          "name": "Linhardt Von Hevring",
          "degree": "Bachelor of Theological Magic",
          "house": "black_eagles",
          "profileUrl": "https://i.imgur.com/IKwv9El.png",
          "password": "sleepystudent"
      },
      {
          "name": "Felix Hugo Fraldarius",
          "degree": "Bachelor of Close Combat",
          "house": "blue_lions",
          "profileUrl": "https://i.imgur.com/5wCEtt7.png",
          "password": "fiercewarrior"
      },
      {
          "name": "Claude von Regan",
          "degree": "Bachelor of Archery",
          "house": "golden_deer",
          "profileUrl": "https://i.imgur.com/qHiohyv.png",
          "password": "cleverarcher"
      },
      {
          "name": "Edelgard von Hresvelg",
          "degree": "Bachelor of Warring Defence",
          "house": "black_eagles",
          "profileUrl": "https://i.imgur.com/DGaXSpa.png",
          "password": "mightyempress"
      },
      {
          "name": "Marianne von Edmund",
          "degree": "Bachelor of Nursing",
          "house": "golden_deer",
          "profileUrl": "https://i.imgur.com/hafU5sv.png",
          "password": "shybeliever"
      },
      {
          "name": "Lorenz Hellman Gloucester",
          "degree": "Bachelor of Knightly Studies",
          "house": "golden_deer",
          "profileUrl": "https://i.imgur.com/NNEOBNx.png",
          "password": "snobbynoble"
      },
      {
          "name": "Annette Fantine Dominic",
          "degree": "Bachelor of Magical Studies",
          "house": "blue_lions",
          "profileUrl": "https://i.imgur.com/qhpJAGo.png",
          "password": "rallyingmage"
      },
      {
          "name": "Ingrid Brandl Galatea",
          "degree": "Bachelor of Pegasi Warfare",
          "house": "blue_lions",
          "profileUrl": "https://i.imgur.com/qW2KGQL.png",
          "password": "rallyingmage"
      },
      {
          "name": "Hubert von Vestra",
          "degree": "Bachelor of Dark Sorcery",
          "house": "black_eagles",
          "profileUrl": "https://i.imgur.com/B4cCwqL.png",
          "password": "creepysidekick"
      },
      {
          "name": "Ferdinand von Aegir",
          "degree": "Bachelor of Noble Warfare",
          "house": "black_eagles",
          "profileUrl": "https://i.imgur.com/UNG0Tw1.png",
          "password": "iconicloudmouth"
      }
  ]
  return (
    <>
      <Navbar/>
      <div className="flex flex-row w-screen h-[87%]">
        <div className="flex justify-center items-center w-[27.5%] h-full">
            <Sidebar/>
        </div>
        <div className="flex flex-col items-center justify-center w-[72.5%] py-10">
          <MainBlock>
            <div className="flex w-[95%] overflow-scroll px-5 justify-center">
              <div className="grid grid-cols-3 gap-8">
                {studentData.map(e => <StudentCard name={e.name} degree={e.degree} house={e.house} profileUrl={e.profileUrl}/>)}
              </div>
            </div>
          </MainBlock>
          <br></br>
          <div className="w-[92.5%]">
            <GMButton name='Back' onClick={navBack}/>
          </div>
        </div>
      </div>
    </>
  )
}