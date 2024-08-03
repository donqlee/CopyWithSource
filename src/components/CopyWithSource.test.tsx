import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CopyWithSource from "./CopyWithSource";

describe("CopyWithSource", () => {
  it("renders children correctly", () => {
    render(
      <CopyWithSource sourceText="Test Source">
        <p>Test Content</p>
      </CopyWithSource>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
