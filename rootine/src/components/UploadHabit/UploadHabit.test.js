import { render, screen, waitFor, userEvent } from '@testing-library/react'
import {expect, test} from '@jest/globals'
import UploadHabit from "./UploadHabit";
import { ChakraProvider } from "@chakra-ui/react";


test('make sure habit name and description textbox is displayed', ()=>{
    render(<ChakraProvider><UploadHabit/></ChakraProvider>);

    //screen.debug()
     waitFor(()=>{
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Add habit description here')).toBeInTheDocument()
    })
})

test('make sure userevent for habit name and description works', ()=>{
    render(<ChakraProvider><UploadHabit/></ChakraProvider>);

    waitFor(()=>{
    userEvent.click(screen.getByRole('textbox')).keyboard('test string')
    expect(screen.getByRole('textbox')).toHaveTextContent('test string')
    })
})

test('submit button calls the formsubmit function', ()=>{
    render(<ChakraProvider><UploadHabit/></ChakraProvider>);

    let newHabitName= 'new habit'
    let newHabitDescription = 'new description'
    let frequency = ', Everyday: true, FrReps: null, FrInterval: null, User: hannahtest'

    waitFor(()=>{
    userEvent.click(screen.getByRole('textbox')).keyboard(newHabitName)
    userEvent.click(screen.getByPlaceholderText('Add habit description here')).keyboard(newHabitDescription)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('article')).toHaveTextContent('Name: ', newHabitName, ', Description: ', newHabitDescription, frequency )
    })
})
