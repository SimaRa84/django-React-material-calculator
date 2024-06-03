import React, { useState, useEffect } from "react";
import "./materialForm.css";
import axios from "axios";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MaterialForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    diameter: "",
    thickness: "",
    passes: "",
    designType: "",
  });

  const [materialOptions, setMaterialOptions] = useState([]);
  const [designOptions, setDesignOptions] = useState([]);

  const [resultVisible, setResultVisible] = useState(false);
  const [resultValues, setResultValues] = useState({
    high: "",
    low: "",
    laser: "",
    tig: "",
  });

  useEffect(() => {
    // Function to fetch options from the API
    const fetchOptions = async () => {
      try {
        const materialResponse = await axios.get(
          "http://127.0.0.1:8000/api/material-options/"
        );
        setMaterialOptions(materialResponse.data);

        const designResponse = await axios.get(
          "http://127.0.0.1:8000/api/design-options/"
        );
        setDesignOptions(designResponse.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const allFieldsCompleted = () => {
    const materialRate = parseFloat(formData.type);
    const number_of_passes = parseFloat(formData.passes);
    const designType = parseFloat(formData.designType);
    const diameter = parseFloat(formData.diameter);
    const thickness = parseFloat(formData.thickness);
    const result = diameter * thickness;

    setResultVisible(true);

    setResultValues({
      high: result.toFixed(2),
      low: result.toFixed(2),
      laser: result.toFixed(2),
      tig: result.toFixed(2),
    });
  };

  useEffect(() => {
    if (
      formData.type &&
      formData.diameter &&
      formData.thickness &&
      formData.passes &&
      formData.designType
    ) {
      allFieldsCompleted();
    }
  }, [formData]);

  return (
    <>
      <div id="calc" className="form-container">
        <p>
          All Dimensions are in Inches.
          <br />
          Use the "Tab" key to move between fields.
        </p>

        <p className="blue">All Variables are in Blue</p>

        <div className="form-group">
          <label>
            Choose Type of Material:
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Choose an Option</option>
              {materialOptions.map((option) => (
                <option key={option.rate} value={option.rate}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Diameter at Welder (Inches):
            <input
              type="number"
              name="diameter"
              value={formData.diameter}
              onChange={handleChange}
              step="0.01"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Gauge Thickness (Inches):
            <input
              type="number"
              name="thickness"
              value={formData.thickness}
              onChange={handleChange}
              step="0.01"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Number of Fin Passes:
            <select
              name="passes"
              value={formData.passes}
              onChange={handleChange}
            >
              <option value="">Choose an Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Choose Design Type:
            <select
              name="designType"
              value={formData.designType}
              onChange={handleChange}
            >
              <option value="">Choose an Option</option>
              {designOptions.map((option) => (
                <option key={option.rate} value={option.rate}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="row">
          <strong>Estimated Strip Width (Inches):</strong>
          <div className="col-xxl-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            High Frequency
          </div>
          <div className="col-xxl-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            Low Frequency
          </div>
          <div className="col-xxl-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            Laser
          </div>
          <div className="col-xxl-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            TIG
          </div>
        </div>
        <br />
        {resultVisible && (
          <div className="row" id="result">
            <div className="col-xxl-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              {resultValues.high}
            </div>
            <div className="col-xxl-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              {resultValues.low}
            </div>
            <div className="col-xxl-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              {resultValues.laser}
            </div>
            <div className="col-xxl-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              {resultValues.tig}
            </div>
          </div>
        )}
        <div className="disclaimer-web">
          <p className="red">
            <strong>Disclaimer</strong>
          </p>
          <p>
            The above information is an estimate only and should be treated as
            such. Due to different variables on different mills, the width(s)
            calculated are strictly approximate and should be proven out before
            ordering an abundant supply.
          </p>
        </div>
      </div>
    </>
  );
};

export default MaterialForm;
