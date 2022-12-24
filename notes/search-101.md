# Search 101

## Recall and Precision

The **recall** is the ratio of "the number of relevant products retrieved" to "the number of relevant products in the catalog".

**Precision** is the ratio of "the number of relevant products retrieved" to "the total number of products retrieved".

Essentially, high precision implies that an algorithm returned a higher number of relevant results, while high recall means that the model returned most of the relevant results.
For the search query `blue jeans`, if the catalog has 100 relevant products and the search retrieves 160 products out of which 80 are relevant, then recall is 80/100 = 0.8.
Precision in this scenario is 80/160 = 0.5.
Instead of Recall and Precision, most of the models in the Information Retrieval domain are measured by a harmonic mean of Recall and Precision, denoted by **F1 score**.