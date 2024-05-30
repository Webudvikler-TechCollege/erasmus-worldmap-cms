import styled from "styled-components"

export const AdminTable = styled.table`
  width: 100%;
  border-left: ${(props) => (props.$hasborder ? "solid 1px #000" : "none")};
  border-right: ${(props) => (props.$hasborder ? "solid 1px #000" : "none")};
  border-top: ${(props) => (props.$hasborder ? "solid 1px #000" : "none")};
  border-spacing: 0px;
  font-size: 0.9rem;

  td,
  th {
    padding: 0.3rem;
  }

  th {
    background-color: #000;
    color: #fff;
    font-weight: normal;
    text-align: left;
  }

  td {
    border-bottom: solid 1px #ccc;
    color: black;

    .list&:last-of-type {
      width: 10%;
      text-align: right;
      a {
        color: ${(props) => props.theme.colors.primary};
        :hover {
          color: ${(props) => props.theme.colors.tertiary};
        }
      }
      .actionbtn {
        font-size: medium;
        margin-left: 0.3rem;
      }
    }
  }

  &.view td {
      vertical-align: top;
  }

  .field {
    font-weight: bold;
    width: 20%;
  }

`

export const AdminForm = styled.form`
  div {
    width: 50rem;
    display: grid;
    grid-template-columns: 2fr 10fr;
    margin-bottom: 20px;

    input,
    select,
    textarea {
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
      font-size: 1rem;
    }

    textarea {
      height: 200px;
    }
  }

  .buttonPanel {
    display: flex;
    justify-content: flex-end;

    button {
      background: ${(props) => props.theme.colors.primary};
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      color: white;
      cursor: pointer;
      font-weight: bold;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      margin-left: 0.5rem;
    }
  }

  span {
    display: block;
    color: red;
    font-size: ${(props) => props.theme.fontsizes.xs};
  }
`
