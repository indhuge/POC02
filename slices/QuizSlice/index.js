  /**
   * @typedef {import("@prismicio/client").Content.QuizSliceSlice} QuizSliceSlice
   * @typedef {import("@prismicio/react").SliceComponentProps<QuizSliceSlice>} QuizSliceProps
   * @param {QuizSliceProps}
   */

  import React, { useState } from "react";
  import Styles from "./style.module.scss";
  import { useEffect } from "react";

  const QuizSlice = ({ slice }) => {
    const answerValues = {
      resposta11: 1,
      resposta21: 2,
      resposta31: 3,
      resposta12: 1,
      resposta22: 2,
      resposta32: 3,
      resposta13: 1,
      resposta23: 2,
      resposta33: 3,
      resposta14: 1,
      resposta24: 2,
      resposta34: 3,
      resposta15: 1,
      resposta25: 2,
      resposta35: 3,
    };

    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerChange = (question, value) => {
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [question]: value,
      }));
    };
  
    const calculateResult = () => {
      let sum = 0;
      for (const question in selectedAnswers) {
        sum += parseInt(selectedAnswers[question]);
      }
      return sum;
    };

    const openPopup = () => {
      let popup = document.getElementById('popup');
      console.log('openPopup function called');
      popup.style.visibility = 'visible';
      console.log('openPopup function called2');
    };

    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >

        {slice.items.map((i,index) => {
          return (
            <div className={Styles.container}>
              <h1 className={Styles.titulo}>Quiz IndHuge</h1>

            <form>
              <div className={Styles.bloco1}>
                <h4 className={Styles.pergunta}>{i.pergunta1}</h4>
                <div className={Styles.alt1}>
                <input
                  type="radio"
                  name="pergunta1"
                  value = {answerValues.resposta11}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta1', e.target.value)
                  }
                />

                <label className={Styles.resposta}>{i.resposta11}</label>
                </div>
                <div className={Styles.alt1}>
                <input
                  type="radio"
                  name="pergunta1"
                  value = {answerValues.resposta21}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta1', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta21}</label>
                </div> <div className={Styles.alt1}>
                <input
                  type="radio"
                  name="pergunta1"
                  value = {answerValues.resposta31}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta1', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta31}</label>
              </div>



              </div>
                  <div className={Styles.bloco2}>
                    <h4 className={Styles.pergunta}>{i.pergunta2}</h4>
                    <div className={Styles.alt2}>
                    <input
                  type="radio"
                  name="pergunta2"
                  value = {answerValues.resposta12}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta2', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta12}</label>
                </div>
                <div className={Styles.alt2}>
                <input
                  type="radio"
                  name="pergunta2"
                  value = {answerValues.resposta22}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta2', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta22}</label>
                </div>
                <div className={Styles.alt2}>
                <input
                  type="radio"
                  name="pergunta2"
                  value = {answerValues.resposta32}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta2', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta32}</label>
                </div>
                  </div>



                  <div className={Styles.bloco3}>
                    <h4 className={Styles.pergunta}>{i.pergunta3}</h4>
                    <div className={Styles.alt3}>
                <input
                  type="radio" 
                  name="pergunta3"
                  value = {answerValues.resposta13}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta3', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta13}</label>
                </div>
                <div className={Styles.alt3}>
                <input
                  type="radio"
                  name="pergunta3"
                  value = {answerValues.resposta23}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta3', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta23}</label>
                </div> 
                <div className={Styles.alt3}>
                <input
                  type="radio"
                  name="pergunta3"
                  value = {answerValues.resposta33}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta3', e.target.value)
                  }
                />
                    <label className={Styles.resposta}>{i.resposta33}</label>
                  </div>
                  </div>


                  <div className={Styles.bloco4}>
                    <h4 className={Styles.pergunta}>{i.pergunta4}</h4>
                    <div className={Styles.alt4}>
                <input
                  type="radio" 
                  name="pergunta4"
                  value = {answerValues.resposta14}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta4', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta14}</label>
                </div>
                <div className={Styles.alt4}>
                <input
                  type="radio"
                  name="pergunta4"
                  value = {answerValues.resposta24}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta4', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta24}</label>
                </div> 
                <div className={Styles.alt4}>
                <input
                  type="radio"
                  name="pergunta4"
                  value = {answerValues.resposta34}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta4', e.target.value)
                  }
                />
                    <label className={Styles.resposta}>{i.resposta34}</label>
                  </div>
                  </div>
                  


                  <div className={Styles.bloco5}>
                    <h4 className={Styles.pergunta}>{i.pergunta5}</h4>
                    <div className={Styles.alt5}>
                <input
                  type="radio" 
                  name="pergunta5"
                  value = {answerValues.resposta15}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta5', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta15}</label>
                </div>
                <div className={Styles.alt5}>
                <input
                  type="radio"
                  name="pergunta5"
                  value = {answerValues.resposta25}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta5', e.target.value)
                  }
                />
                <label className={Styles.resposta}>{i.resposta25}</label>
                </div> 
                <div className={Styles.alt5}>
                <input
                  type="radio"
                  name="pergunta5"
                  value = {answerValues.resposta35}
                  className={Styles.radioButton}
                  onChange={(e) =>
                    handleAnswerChange('pergunta5', e.target.value)
                  }
                />
                  <label className={Styles.resposta}>{i.resposta35}</label>
                  </div>
                  </div>
                  
                  <button type="button" className={Styles.botao} onClick={openPopup}>{i.textobotao}</button>

                  <div className={Styles.popup} id="popup">
                    {calculateResult() == 0 && (
                      <h2 className={Styles.textoPopup}>Responda o quiz para ver seu resultado</h2>
                    )}
                    {calculateResult() < 8 && calculateResult() > 0 &&(
                      <h2 className={Styles.textoPopup}>{i.resultadoMaioriaA}</h2>
                    )}
                    {calculateResult() >= 8 && calculateResult() < 11 && (
                      <h2 className={Styles.textoPopup}>{i.resultadoMaioriaB}</h2>
                    )}
                    {calculateResult() >= 11 && (
                      <h2 className={Styles.textoPopup}>{i.resultadoMaioriaC}</h2>
                    )}
                  <p className={Styles.textoPopup}>{i.textoresultado}</p>
                  <button className={Styles.botaoPopup}>
                      <a href="/#home" className={Styles.linkHome}>indhuge</a>
                  </button>
                  </div>
                  </form>
                  </div>

          );
          })}
      </section>
    );
  };

  export default QuizSlice;
