import React from 'react'
import { useStyles } from 'styles'
import './styles.css'

const AdventureMap = () => {

  const classes = useStyles();
  const completed: boolean = true;
  const length: number = 3;
  const trofeu: string = '../assets/images/trofeu.svg'

  return (
    <div className={classes.flexCol}>
      <h1>Mapa da Aventura</h1>
      <div className='containerMap'>
        {(
          length >= 1 ? <div className={`mapItem ${completed && length === 1? 'finish' : ''}`} style={{top: 80, left: '10%'}}>
            {completed && length === 1  ? <img src={trofeu}/> : <span>1</span>}
          </div> : null
        )}
        {(
          length >= 2 ?  <div className={classes.contents}>
            <div className='line'></div>
            <div className={`mapItem ${completed && length === 2? 'finish' : ''}`} style={{top: 180, left: '20%'}}>
              {completed && length === 2  ? <img src={trofeu} className='trofeu'/> : <span>2</span>}
            </div>
          </div> : null
        )}
        {(
          length >= 3 ?  <div className={classes.contents}>
            <div className='line-inverted' style={{left: 680, top: 350}}></div>
            <div className={`mapItem ${completed && length === 3? 'finish' : ''}`} style={{top: 80, left: '30%'}}>
              {completed && length === 3  ? <img src={trofeu} className='trofeu'/> : <span>3</span>}
            </div>
          </div> : null
        )}
        {(
          length >= 4 ? <div className={classes.contents}>
            <div className='line-inverted' style={{left: 956, top: 224, transform: 'rotate(13deg)', zIndex: -1}}></div>
            <div className={`mapItem ${completed && length === 4? 'finish' : ''}`} style={{top: 30, left: '40%'}}>
              {completed && length === 4  ? <img src={trofeu} className='trofeu'/> : <span>4</span>}
            </div>
          </div> : null
        )}
        {(
          length >= 5 ? <div className={classes.contents}>
            <div className='line' style={{left: 1188, top: 184, transform: 'rotate(21deg)', zIndex: -1}}></div>
            <div className={`mapItem ${completed && length === 5? 'finish' : ''}`} style={{top: 200, left: '45%'}}>
              {completed && length === 5  ? <img src={trofeu} className='trofeu'/> : <span>5</span>}
            </div>  
          </div> : null
        )}
        {(
          length >= 6 ? <div className={classes.contents}>
            <div className='line-inverted' style={{left: 1205, top: 565, transform: 'rotate(-27deg)', zIndex: -1}}></div>
            <div className={`mapItem ${completed && length === 6? 'finish' : ''}`} style={{top: 400, left: '29%'}}>
              {completed && length === 6  ? <img src={trofeu} className='trofeu'/> : <span>6</span>}
            </div>
          </div> : null
        )}
        {(
          length >= 7 ? <div className={classes.contents}>
            <div className='line' style={{left: 925, top: 500, transform: 'rotate(-15deg)', zIndex: -1}}></div>
            <div className={`mapItem ${completed && length === 7? 'finish' : ''}`} style={{top: 350, left: '0%'}}>
              {completed && length === 7  ? <img src={trofeu} className='trofeu'/> : <span>7</span>}
            </div>
          </div> : null
        )}
        {(
          length >= 8 ? <div className={classes.contents}>
            <div className='line' style={{left: 647, top: 573, transform: 'rotate(-43deg)', zIndex: -1}}></div>
            <div className={`mapItem ${completed && length === 8? 'finish' : ''}`} style={{top: 400, left: '-30%'}}>
              {completed && length === 8  ? <img src={trofeu} className='trofeu'/> : <span>8</span>}
            </div>
          </div> : null
        )}
      </div>
    </div>
  )
}

export default AdventureMap