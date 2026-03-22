## Anomaly Analysis

### Insert Anomaly Example:
The data in the column office_address is inconsistent for sales_rep_name = "Deepak Joshi". For some rows the office address is "Mumbai HQ, Nariman Point, Mumbai - 400021" while for some it is "Mumbai HQ, Nariman Pt, Mumbai - 400021". As the inserted data in the column office_address in not consistent, it is an insert anomaly. An insert anonmaly will also happen if a new product is added that does not have an order or if a new customer is added who has not yet placed any order.

### Update Anomaly Example:
The information in the columns customer_name,customer_email,customer_city, product_name, category,unit_price,sales_rep_name,sales_rep_email,office_address are repeated in multiple rows and hence resulting in update anomaly.

### Delete Anomaly Example:
Deleting the row with order_id = ORD1185, removes the details of the product "Webcam" completely from the table i.e. the information of the cells product_id = P008, product_name = "Webcam" are lost after deleting the row. Hence it is a delete anomaly.
