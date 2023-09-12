import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout"
import Plans from "./Plans";
import Info from "./Info";
import AddOn from "./AddOns"
import Summary from "./Summary";
import ThankYou from "./ThankYou";


function App() {
  const [currectSection, setCurrectSection] = useState(sessionStorage.getItem("currectSection") !== null ? sessionStorage.getItem("currectSection") : "info")

  const dataPlanName = sessionStorage.getItem("dataPlan") !== null ? JSON.parse(sessionStorage.getItem("dataPlan")).name : ""
  const dataPlanCost = sessionStorage.getItem("dataPlan") !== null ? JSON.parse(sessionStorage.getItem("dataPlan")).cost : 0
  const dataPlanPayment = sessionStorage.getItem("dataPlan") !== null ? JSON.parse(sessionStorage.getItem("dataPlan")).payment : ""

  const prevDataAddOns = sessionStorage.getItem("dataAddOns") !== null ? JSON.parse(sessionStorage.getItem("dataAddOns")) : [
    {"selected": false, "name": "Online service", "Monthly":  1, "Yearly": 10},
    {"selected": false, "name": "Larger storage", "Monthly":  2, "Yearly": 20},
    {"selected": false, "name": "Customizable profile", "Monthly":  2, "Yearly": 20}
  ]

  const [dataPlan, setDataPlan] = useState({
    "name": dataPlanName,
    "cost": dataPlanCost,
    "payment": dataPlanPayment
  })

  const [dataAddOns, setDataAddOns] = useState(prevDataAddOns)

  function handleSection(newSection){
    setCurrectSection(newSection)

  }
  function handlePlans(name, cost, payment){
    setDataPlan(prevDataPlan => ({
      ...prevDataPlan,
      "name": name,
      "cost": cost,
      "payment": payment
    }))
  }
  function handleAddOns(event, idx){
    const {name, checked} = event.target
    let newArr = [...dataAddOns]
    newArr[idx][name] = checked
    setDataAddOns(newArr)
  }

  useEffect(() => {
   sessionStorage.setItem("dataPlan", JSON.stringify(dataPlan))
  }, [dataPlan]) 

  useEffect(() => {
   sessionStorage.setItem("dataAddOns", JSON.stringify(dataAddOns))
  }, [dataAddOns])

  useEffect(() =>{
   sessionStorage.setItem("currectSection", currectSection)
  }, [currectSection])



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currectSection={currectSection} />}>
            <Route index element={<Info handleSection={handleSection}  currectSection={currectSection}/>} />
            <Route path="/plans" element={<Plans handleSection={handleSection} handlePlans={handlePlans} />}></Route>
            <Route path="/addOns" element={<AddOn dataPlan={dataPlan} dataAddOns={dataAddOns} handleAddOns={handleAddOns} handleSection={handleSection} />}></Route>
            <Route path="/summary" element={<Summary dataAddOns={dataAddOns} dataPlan={dataPlan} handleSection={handleSection} />}></Route>
            <Route path="/thankYou" element={<ThankYou/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
