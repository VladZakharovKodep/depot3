import React, { useState } from "react";

import NoPayType from "./NoPayType";
import CreditCardPayType from "./CreditCardPayType";
import CheckPayType from "./CheckPayType";
import PurchaseOrderPayType from "./PurchaseOrderPayType";

export default function PayTypeSelector() {
  const [selectedPayType, setSelectedPayType] = useState(null);

  let PayTypeCustomComponent = NoPayType;

  if (selectedPayType == "Credit card") {
    PayTypeCustomComponent = CreditCardPayType;
  } else if (selectedPayType == "Check") {
    PayTypeCustomComponent = CheckPayType;
  } else if (selectedPayType == "Purchase order") {
    PayTypeCustomComponent = PurchaseOrderPayType;
  }
  return (
    <div>
      <div className="field">
        <label htmlFor="order_pay_type">{I18n.t("orders.form.pay_type")}</label>
        <select
          id="order_pay_type"
          onChange={(e) => setSelectedPayType(e.target.value)}
          name="order[pay_type]"
        >
          <option value="">{I18n.t("orders.form.pay_prompt_html")}</option>
          <option value="Check">{I18n.t("orders.form.pay_types.check")}</option>
          <option value="Credit card">
            {I18n.t("orders.form.pay_types.credit_card")}
          </option>
          <option value="Purchase order">
            {I18n.t("orders.form.pay_types.purchase_order")}
          </option>
        </select>
      </div>
      <PayTypeCustomComponent />
    </div>
  );
}
