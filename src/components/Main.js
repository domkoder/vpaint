import Canvas1 from './canvas/Canvas1';
import Canvas2 from './canvas/Canvas2';
import Canvas3 from './canvas/Canvas3';
import ColorButton from './ColorButton';
import {Switch, Route} from "react-router-dom";

function Main({activeWall, onGetActiveWallClass, onSelectColor, getProcessLight}) {
  return (
      <main className="main">
        <div className="ml--auto" style={{"margin-right":"2rem","margin-top":"2rem"}}>
          <div style={{"display":"flex","padding-bottom":"10px"}} className="share">
            <button className="btn btn--share">Share</button>
            <img style={{"margin-left":"10px"}} src="/img/share.svg" alt="share" />
          </div>
          <button className="btn btn--buy">Buy all</button>
        </div>

        <Switch>
          <Route exact path="/">
            <Canvas1 activeWall={activeWall} onGetActiveWallClass={onGetActiveWallClass}/>
          </Route>

          <Route path="/2">
            <Canvas2  activeWall={activeWall} onGetActiveWallClass={onGetActiveWallClass}/>
          </Route>
          
          <Route path="/3">
            <Canvas3  activeWall={activeWall} onGetActiveWallClass={onGetActiveWallClass}/>
          </Route>
        </Switch>

        <button className="btn btn-process" onClick={getProcessLight}>
        Process Light
        </button>
        
        <div className="palette">
          <div className="palette__container">
            <ColorButton onSelectColor={onSelectColor} color={'#ff3737'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ff6f6f'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ffa4a4'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ffcfcf'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#fff2f2'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ff7f37'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ffb46e'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ffe0cf'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#fff8f2'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ff3737'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ff6f6f'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ffa4a4'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#ffcfcf'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#3197F3'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#0386FF'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#FD6A00'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#3197F3'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#54A8F5'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#74B6F2'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#97C9F7'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#B8DAF9'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#F82B75'}/>

            <ColorButton onSelectColor={onSelectColor} color={'#BD00FF'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#BF2CF2'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#CB2C2C'}/>
            {/* <ColorButton onSelectColor={onSelectColor} color={'#C547F1'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#CB61F0'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#CF7AED'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#D28FEA'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#DCAEED'}/>
            <ColorButton onSelectColor={onSelectColor} color={'#FF005C'}/> */}


          </div>
        </div>
      </main>
  )
}

export default Main
