import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ProductForm } from "./ProductForm";

vi.mock("sweetalert2", () => {
  return {
    __esModule: true,
    default: {
      fire: vi.fn().mockResolvedValue({}),
    },
  };
});

describe("ProductForm validation", () => {
  it("validates that Product Name cannot be empty", async () => {
    render(<ProductForm onSubmit={vi.fn()} />);

    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    expect(
      await screen.findByText(/Product name is required/i)
    ).toBeInTheDocument();
  });

  it("validates that Product Name does not contain invalid characters", async () => {
    render(<ProductForm onSubmit={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/Product name/i), {
      target: { value: "Invalid@Name" },
    });

  
    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    expect(
      await screen.findByText(/Product name must be alphanumeric/i)
    ).toBeInTheDocument();
  });

  it("validates that Product Name does not exceed 25 characters", async () => {
    render(<ProductForm onSubmit={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/Product name/i), {
      target: { value: "ThisNameIsWayTooLongToBeValid" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    expect(
      await screen.findByText(/Product Name must not exceed 25 characters/i)
    ).toBeInTheDocument();
  });

  it("validates that all form fields are not empty", async () => {
    render(<ProductForm onSubmit={vi.fn()} />);

    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    expect(
      await screen.findByText(/Product name is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Product category is required/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Image is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Product freshness is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Description is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Product price is required/i)
    ).toBeInTheDocument();
  });

  it("shows error message when there is an error saving data", async () => {
    const handleSubmit = vi.fn().mockImplementation(() => {
      throw new Error("Failed to save data");
    });

    render(<ProductForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/Product name/i), {
      target: { value: "Valid Name" },
    });
    fireEvent.change(screen.getByLabelText(/Product Category/i), {
      target: { value: "Category 1" },
    });
    fireEvent.change(screen.getByLabelText(/Additional Description/i), {
      target: { value: "Valid Description" },
    });
    fireEvent.change(screen.getByLabelText(/Product Price/i), {
      target: { value: 100 },
    });
    fireEvent.click(screen.getByLabelText(/Brand New/i));
    const fileInput = screen.getByLabelText(/image/i);
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    // Pastikan Swal.fire dipanggil dengan pesan error
    expect(await screen.findByText(/Failed to save data/i)).toBeInTheDocument();
  });
});
