import "./styles.css";
import { Form } from "../Form/Form";
import { CardInput } from "../CardInput/CardInput";
import { TotalMoney } from "../TotalMoney/TotalMoney";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";

export function Dashboard({
  setPage,
  setValues,
  values,
  setFilterList,
  filterList,
  isFilter,
  setIsFilter,
}) {
  return (
    <div className="dashboard__container">
      <Header setPage={setPage} />
      <div className="dashboard__content">
        <section className="form__container">
          <Form setValues={setValues} />
          <TotalMoney values={values} />
        </section>
        <section className="values__container">
          {values.length === 0 ? (
            <h2 className="no-value">
              Você ainda não possui nenhum lançamento
            </h2>
          ) : (
            <div className="values__btns-and-list">
              <div className="values__btns-container">
                <Button
                  setFilterList={setFilterList}
                  setIsFilter={setIsFilter}
                  values={values}
                  typeFilter="entrada"
                />
                <Button
                  setFilterList={setFilterList}
                  setIsFilter={setIsFilter}
                  values={values}
                  typeFilter="despesa"
                />
                <Button
                  setFilterList={setFilterList}
                  setIsFilter={setIsFilter}
                  values={values}
                  typeFilter="todos"
                />
              </div>
              <ul>
                {isFilter
                  ? filterList.map((element) => (
                      <CardInput
                        values={values}
                        setValues={setValues}
                        key={element.id}
                        id={element.id}
                        desc={element.description}
                        val={element.value}
                        type={element.type}
                      />
                    ))
                  : values.map((element) => (
                      <CardInput
                        values={values}
                        setValues={setValues}
                        key={element.id}
                        id={element.id}
                        desc={element.description}
                        val={element.value}
                        type={element.type}
                      />
                    ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
