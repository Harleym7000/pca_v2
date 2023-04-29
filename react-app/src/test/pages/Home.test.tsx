import React from "react";
import {describe, test, expect} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Home from "../../components/pages/Home";

describe("Home page tests", () => {
    test("when the home page loads and renders the home page text should be displayed", async () => {
        render(<Home/>);
        expect(screen.getByText("Portstewart Community Association")).toBeTruthy();
        expect(screen.getByText("Serving the Portstewart Community")).toBeTruthy();
        expect(screen.getByText("RED SAILS FESTIVAL")).toBeTruthy();
        expect(screen.getByText("A week long festival of arts in Portstewart with events for people of all ages, rounded off with our fantastic fireworks display")).toBeTruthy();
        expect(screen.getByText("TOWN CLEAN UPS")).toBeTruthy();
        expect(screen.getByText("We strive to help keep our town clean and tidy. We hold town clean-ups once a month, everybody welcome!")).toBeTruthy();
        expect(screen.getByText("COMMUNITY EVENTS")).toBeTruthy();
        expect(screen.getByText("We host a wide variety of events for people of all ages in our community. Why not take a look at what's on?")).toBeTruthy();
    });

    test("when the home page loads, the call to action buttons should be displayed", async () => {
       render(<Home/>);
       expect(screen.getByText("FIND OUT MORE")).toBeTruthy();
       expect(screen.getByText("JOIN TODAY")).toBeTruthy();

    });
});
