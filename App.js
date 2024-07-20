import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
//Display do resultado da operação
      <View style={styles.display}>
        <Text style={styles.textDisplay}>0</Text>
      </View>
//Iniciação da estrutur dos botões 
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonColorTwo]}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorTwo]}><Text style={styles.buttonText}>⌫</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorTwo]}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button,  styles.buttonColorOne, styles.buttonDouble]}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonColorOne]}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

//Estilização da calculadora

/*
O layout usa flex para destribuir os espaçamentos dos buttons no display assim deixando responsivo, as escolhas de tons de verdes
foram escolhidas na inspiração do desenho meninas super poderosas na docinho e com a escolha da font: 'Inter-Black' para complementar o designer 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  display: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#B5B5B5',
    padding: 20,
    borderBottomWidth: 1,
  },
  textDisplay: {
    fontSize: 60,
    color: '#00000s0',
    fontFamily: 'Inter-Black'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#387B47',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 20,
    borderRadius: 10,
  },
  buttonDouble: {
    flex: 3,
  },
  buttonColorOne: {
    backgroundColor: '#48A14C',
  },
  buttonColorTwo: {
    backgroundColor: '#54815E',
  },
  buttonText: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Inter-Black'
  },
});
