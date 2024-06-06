import { createGlobalStyle } from "styled-components";

const SyncfusionCustomStyles = createGlobalStyle`
	.e-selectionbackground,
	.e-active,
	.e-gridhover,
	.e-rowcell.e-selectionbackground.e-active,
	.e-gridhover {
		background-color: ${({ theme }) => theme.colors.secondary} !important;
		background-color: ${({ theme }) => theme.colors.secondary} !important;

		&:hover {
			background-color: ${({ theme }) => theme.colors.secondary} !important;
		}
	}

	.e-row:hover {
		background-color: ${({ theme }) => theme.colors.secondary} !important;
	}
	.e-table,
	.e-headercell {
		background-color: ${({ theme }) => theme.colors.background} !important;
		color: white !important;
	}

	.e-headercell {
		height: ${({ theme }) => theme.sizes[56]} !important;

		.e-icons {
			color: ${({ theme }) => theme.colors.primary} !important;
		}
	}

	.e-table {
		.e-focus,
		.e-focused {
			box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.secondary} inset !important;
		}

		.e-row:hover .e-rowcell {
			background-color: ${({ theme }) => theme.colors.hoverBackground} !important;
		}
	}

	.e-rowcell {
		color: ${({ theme }) => theme.colors.text} !important;

		@media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
			font-size: ${({ theme }) => theme.sizes[12]} !important;
 		}
	}

	.e-headertext {
		color: ${({ theme }) => theme.colors.text} !important;
	}

	.e-sortnumber {
		background-color: ${({ theme }) => theme.colors.highlight} !important;
		color: white !important;
	}
`;

export default SyncfusionCustomStyles;
