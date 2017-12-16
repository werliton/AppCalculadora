import React, { Component } from 'react';
import { Picker ,StyleSheet } from 'react-native';

export default class Operacao extends Component{
	constructor(props){
		super(props);

		this.state = { operacao: '' };
	}


	render(){
		return (
			<Picker 
		    	style={styles.operacao}
		    	selectedValue={this.state.operacao}
		    	onValueChange={ operation => this.setState({ operacao: operation })}
		    	>
		      <Picker.Item label='Soma' value='soma'/>
		      <Picker.Item label='Subtração' value='subracao'/>
		    </Picker>
		);
	}
} 

const styles = StyleSheet.create({
  operacao:{
    marginTop: 15,
    marginBottom: 15
  }
});
