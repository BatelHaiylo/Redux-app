import React, { useState } from "react";
import { connect } from 'react-redux';
import RegistretaionForm from "../../featurs/Form/RegistretaionForm.component"

const mapStateToProps = (state) =>({users: state.users})
 
function Home({users}) {
     const someUser = {...users[0]}
     return ( 
          <div>
               <RegistretaionForm user={someUser}/>
          </div>
      );
}

export default connect(mapStateToProps)(Home);