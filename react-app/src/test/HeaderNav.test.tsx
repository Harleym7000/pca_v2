import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import HeaderNav from "../components/HeaderNav";

describe("Navbar Tests", () => {
    test("Renders the navbar component with all nav links", () => {
        render(<HeaderNav/>);
        expect(screen.getByText("Home")).toBeTruthy();
        expect(screen.getByText("About")).toBeTruthy();
        expect(screen.getByText("Events")).toBeTruthy();
        expect(screen.getByText("Red Sails Festival")).toBeTruthy();
        expect(screen.getByText("News")).toBeTruthy();
        expect(screen.getByText("Contact Us")).toBeTruthy();
        expect(screen.getByText("Login")).toBeTruthy();
        expect(screen.getByText("Register")).toBeTruthy();
    });

    test("Clicking on the navbar links results in the user being navigated to the correct location", () => {
        render(<HeaderNav/>);
    });
});
