import React, { Component } from 'react'

export default class ProfileComponent extends Component {

  handleChange =  (event) => {
    this.setState({tradeLink: event.target.value})
  }

  render () {
    var { steamid, balance, wager } = this.props
    return (
      <main>
        <div style={{background: '#ffffff12'}}>
          <div className='container roullete'>
            <div className='row'>
              <div className='progress'>
                <div className='determinate' style={{width: '70%'}}><img src='assets/img/eclipse.png' alt='' /></div>
              </div>
            </div>
            <div className='container center-align roll-tit'>ROLLING IN <span>11 SEC</span></div>
          </div>
          <div className='row roulett'>
            <div className='main-left-border' />
            <div className='main-right-border' />
            <div style={{ width: '1000%',
              overflowY: 'visible',
              height: '226px',
              position: 'relative',
              left: '-450%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center' }} >

              <div className='number yell-red'>
                    3
               </div>
               <div className='number pupr'>
                    3
               </div>
                <div className='number yell-red'>
                    3
               </div>
               <div className='number pupr'>
                    1
               </div>
               <div className='number yell-red'>
                    2
               </div>
               <div className='number pupr'>
                    3
               </div>
               <div className='number yell-red'>
                    4
               </div>
               <div className='number pupr'>
                    5
               </div>
               <div className='number yell-red active-num'>
                   <div className='upper_shadow'></div><div className='bottom_shadow' />
                    3
               </div>
               <div className='number pupr'>
                    1
               </div>
               <div className='number yell-red'>
                    2
               </div>
               <div className='number zero'>
                    0
               </div>
               <div className='number yell-red'>
                    4
               </div>
               <div className='number pupr'>
                    5
               </div>
               <div className='number yell-red'>
                    3
               </div>
               <div className='number pupr'>
                    3
               </div>
                <div className='number yell-red'>
                    3
               </div>

             </div>

           </div>
            <div className='container last_rols_contain' style={{width: '88%', overflow: 'hidden'}}>
                <div className='last_rolls'>LAST ROLLS:</div>

                <div className='roll yell-red'>1</div>
                <div className='roll pupr'>1</div>
                <div className='roll yell-red'>1</div>
                <div className='roll yell-red'>1</div>
                <div className='roll zero'>1</div>
                <div className='clr'></div>
            </div>
            <div className='row' style={{borderBottom: '1px solid #47484b', marginTop: '45px'}} />
            <div className='row second' style={{marginBottom: '0'}}>
                <div className='col s12 m12 l3 '>
                    <div className='opp'>
                     <div className='white-text numeral'>245</div>
                     <div className='clr-last white-text'>Clear last <br /> best</div>
                    </div>
                </div>
                <div className='col s12 m12 l9 nn'>
                    <div className='hide-on-med-and-down'>
                     <button className='bet waves-effect waves-light'>+0.1</button>
                     <button className='bet yell-red waves-effect waves-light'>+1</button>
                     <button className='bet waves-effect waves-light'>+10</button>

                     <button className='bet waves-effect waves-light'>1/2</button>
                     <button className='bet waves-effect waves-light'>X2</button>
                     <button className='bet waves-effect waves-light'>MAX</button>
                     </div>
                    <div className='hide-on-large-only'>
                     <div className='col s4 m2 l4 xl2'><button className='bet bett waves-effect waves-light'>+0.1</button></div>
                     <div className='col s4 m2 l4 xl2'><button className='bet yell-red bett waves-effect waves-light'>+1</button></div>
                     <div className='col s4 m2 l4 xl2'><button className='bet bett waves-effect waves-light'>+10</button></div>

                     <div className='col s4 m2 l4 xl2'> <button className='bet bett waves-effect waves-light'>1/2</button></div>
                     <div className='col s4 m2 l4 xl2'><button className='bet bett waves-effect waves-light'>X2</button></div>
                     <div className='col s4 m2 l4 xl2'><button className='bet bett waves-effect waves-light'>MAX</button></div>
                    </div>
               </div>
            </div>
         </div>
            <div className='row winner-table'>

                   <div className='col s12 m4 l12 xl4'>
                       <div className='col s6 center-align white-text teta'><span>1-7</span><br />win 2X</div>
                       <div className='col s6 center-align'><button className='bet bttt pupr waves-effect waves-light'>BET</button></div>

                        <div className='row divi-divider' style={{borderBottom: '1px solid #47484b'}} />

                       <div className='center-align purrple'>HIGHEST PURPLE</div>
                        <div className='col s3 left'> <img src='assets/img/ava.png' alt='' style={{width: '40px', height: '40px', borderRadius: '50%', float: 'right'}} /></div>
                        <div className='col s12 center-align namess' style={{paddingLeft: '0', paddingRight: '0'}}>
                         <div className='col s6 center-align nnnn' style={{padding: '0'}}> Ice cube</div>
                         <div className='col s3 left-align nnnn'> 207</div>
                       </div>

                 </div>
                  <div className='col s12 m4 l12 xl4 exlusive'>
                       <div className='col s6 center-align white-text teta'><span>1-7</span><br />win 2X</div>
                       <div className='col s6 center-align'><button className='bet bttt zero waves-effect waves-light'>BET</button></div>

                      <div className='row divi-divider' style={{borderBottom: '1px solid #47484b'}}></div>

                       <div className='center-align purrple'>HIGHEST BLUE</div>

                    <div className='col s12 center-align namess' style={{paddingLeft: '0', paddingRight: '0'}}>
                     <div className='col s3 left'> <img src='assets/img/ava.png' alt='' style={{width: '40px', height: '40px', borderRadius: '50%', float: 'right'}} /></div>
                      <div className='col s6 center-align nnnn'  style={{padding: '0'}}> Ice cube</div>
                      <div className='col s3 left-align nnnn'> 207</div>
                    </div>

                 </div>
                  <div className='col s12 m4 l12 xl4'>
                       <div className='col s6 center-align white-text teta'><span>1-7</span><br />win 2X</div>
                       <div className='col s6 center-align'><button className='bet bttt yell-red waves-effect waves-light'>BET</button></div>

                        <div className='row divi-divider' style={{borderBottom: '1px solid #47484b'}}></div>

                      <div className='center-align purrple'>HIGHEST BLUE</div>

                    <div className='col s12 center-align namess' style={{paddingLeft: '0', paddingRight: '0'}}>
                     <div className='col s3 left'> <img src='assets/img/ava.png' alt='' style={{width: '40px', height: '40px', borderRadius: '50%', float: 'right'}} /></div>
                      <div className='col s6 center-align nnnn' style={{padding: '0'}}> Ice cube</div>
                      <div className='col s3 left-align nnnn'> 207</div>
                    </div>

                 </div>






            </div>

        </main>
    )
  }
}
