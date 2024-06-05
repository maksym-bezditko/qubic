export const OVERWRITE_SYNCFUSION_CSS = `
	.e-selectionbackground,
	.e-active,
	.e-gridhover,
	.e-rowcell.e-selectionbackground.e-active,
	.e-gridhover {
		background-color: #4b5565 !important;

		&:hover {
			background-color: #4b5565 !important;
		}
	}

	.e-row:hover {
		background-color: #4b5565 !important;
	}
	.e-table,
	.e-headercell {
		background-color: #1e2b38;
		color: white !important;
	}

	.e-headercell {
		height: 56px;

		.e-icons {
			color: #03c1db !important;
		}
	}

	.e-table {
		.e-focus,
		.e-focused {
			box-shadow: 0 0 0 1px #4b5565 inset !important;
		}

		.e-row:hover .e-rowcell {
			background-color: #202e3cbe !important;
		}
	}

	.e-rowcell {
		color: #ffffff !important;
	}

	.e-headertext {
		color: #ffffffb6 !important;
	}

	.e-sortnumber {
		background-color: #019AB8 !important;
		color: white !important;
	}
`;
