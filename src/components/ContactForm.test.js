
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";


test("ContactForm allows inputs and adds contact info", () => {
    render(<ContactForm />);

    const fnameInput = screen.getByLabelText(/first name/i);
    const lnameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByTestId(/submit/i);

    fireEvent.change(fnameInput, { target: { value: "Joe" } });
    fireEvent.change(lnameInput, { target: { value: "Smith" } });
    fireEvent.change(emailInput, { target: { value: "yellow@orange.com" } });
    fireEvent.change(messageInput, { target: { value: "Lift Heavy, Be Kind" } });

    // act(() => {
    //     fireEvent.click(submitButton);
    // });

    fireEvent.click(submitButton);

    // expect(fnameInput).toHaveLength(3);

    const newData1 = screen.findByText("Joe");
    const newData2 = screen.findByText("Smith");
    const newData3 = screen.findByText("yellow@orange.com");
    const newData4 = screen.findByText("Lift Heavy, Be Kind");


    //expect(newData1).toBeInTheDocument();

});

