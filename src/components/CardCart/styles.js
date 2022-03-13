import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .card-list {
    margin: 30px;

    .content {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      border: 1px solid var(--color6);
      border-radius: 4px;

      @media (min-width: 500px) {
        flex-direction: row;
      }

      .container-img {
        img {
          margin: 10px;
          width: 150px;
          height: 120px;
        }
      }
      .info {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: var(--color1);

        h2 {
          font-size: 15px;
          margin: 10px;
        }

        span {
          font-size: 13px;
        }

        button {
          width: 200px;
          height: 30px;
          background-color: var(--color4);
          border: 1px solid var(--color4);
          border-radius: 4px;
          margin: 10px;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 200px;
    border: 1px solid var(--color6);
    border-radius: 4px;

    @media (min-width: 650px) {
      position: relative;
      bottom: 205px;
    }
    .higher {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      background-color: var(--color2);
      color: var(--color7);
    }
    .bottom {
      display: flex;
      height: 160px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      background-color: var(--color1);

      span {
        font-weight: bold;
      }

      button {
        width: 200px;
        height: 30px;
        background-color: var(--color4);
        border: 1px solid var(--color4);
        border-radius: 4px;
        margin: 10px;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
`;
