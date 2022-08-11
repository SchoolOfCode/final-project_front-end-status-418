import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {expect, test} from '@jest/globals'
import UploadHabit from "./UploadHabit";
import { ChakraProvider } from "@chakra-ui/react";


test('make sure habit name and description textbox is displayed', async ()=>{
    render(<ChakraProvider><UploadHabit/></ChakraProvider>);

    //screen.debug()
    await waitFor(()=>{
        expect(screen.getByPlaceholderText('Add habit name here')).toBeInTheDocument()
    })
    await waitFor(()=>{
        expect(screen.getByPlaceholderText('Add habit description here')).toBeInTheDocument()
    })
})

test('make sure userevent for habit name and description works', async ()=>{
    render(<ChakraProvider><UploadHabit/></ChakraProvider>);

    userEvent.click(screen.getByPlaceholderText('Add habit name here'))
    userEvent.keyboard('test string')
    await waitFor(()=>{
    expect(screen.getByPlaceholderText('Add habit name here')).toHaveValue('test string')
    })
})

test('submit button calls the formsubmit function', async ()=>{
    render(<ChakraProvider><UploadHabit/></ChakraProvider>);

    let newHabitName= 'new habit'
    let newHabitDescription = 'new description'
    let frequency = ', Everyday: true, FrReps: null, FrInterval: null, User: hannahtest'

    userEvent.click(screen.getByPlaceholderText('Add habit name here'))
    userEvent.keyboard(newHabitName)
    userEvent.click(screen.getByPlaceholderText('Add habit description here'))
    userEvent.keyboard(newHabitDescription)
    userEvent.click(screen.getByRole('button'))
    await waitFor(()=>{
    expect(screen.getByRole('article')).toHaveTextContent('Name: ', newHabitName, ', Description: ', newHabitDescription, frequency )
    })
})
