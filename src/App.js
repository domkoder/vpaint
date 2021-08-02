import Header from "./components/Header";
import Aside from "./components/Aside";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import {useState} from 'react';


function App() {
  const [activeWall, setActiveWall] = useState(
    {
      wallOne:{
        color:'',
      },
      wallTwo:{
        color:'',
      },
      active:'',
      light: false
    }
  );


  const getActiveWallClass = (activeWallClass) => {
    const wallOneColor = activeWall.wallOne.color;
    const wallTwoColor = activeWall.wallTwo.color;
    const light = activeWall.light;
    const active = activeWallClass;

    setActiveWall(
      {
        wallOne:{
          color:wallOneColor,
        },
        wallTwo:{
          color:wallTwoColor,
        },
        active,
        light
      }
    );
    // console.log(activeWallClass)
  }

  const selectColor = (color,) =>  {
    const wallOneColor = activeWall.wallOne.color;
    const wallTwoColor = activeWall.wallTwo.color;
    const active = activeWall.active;
    const light = activeWall.light;
 
    if (active === 'wallOne') {
      setActiveWall(
        {
          wallOne:{
            color:color,
          },
          wallTwo:{
            color:wallTwoColor,
          },
          active,
          light
        }
      );
    }else if(active === 'wallTwo'){
      setActiveWall(
        {
          wallOne:{
            color:wallOneColor,
          },
          wallTwo:{
            color:color,
          },
          active,
          light
        }
      );
    }else if(active !== 'wallOne' && active !== 'wallTwo'){
      setActiveWall(
        {
          wallOne:{
            color:color,
          },
          wallTwo:{
            color:color,
          },
          active,
          light
        }
      );
    }
  }

  const processLight = () => {
    const wallOneColor = activeWall.wallOne.color;
    const wallTwoColor = activeWall.wallTwo.color;
    const active = activeWall.active;
    const light = !activeWall.light;

    setActiveWall(
      {
        wallOne:{
          color:wallOneColor,
        },
        wallTwo:{
          color:wallTwoColor,
        },
        active,
        light
      }
    )

  }

  const resetColor = () =>{
    setActiveWall(
      {
        wallOne:{
          color:'',
        },
        wallTwo:{
          color:'',
        },
        active:'',
        light: false
      }
    );
  }

  return (
    <div className="container">
      <Header/>
      <Aside onResetColor={resetColor}/>
      <Sidebar/>
      <Main getProcessLight={processLight} onSelectColor={selectColor} onGetActiveWallClass={getActiveWallClass} activeWall={activeWall}/>
    </div>
  );
}

export default App;
