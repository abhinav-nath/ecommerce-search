# Search 101

A search engine is nothing more than a sophisticated token-matching system and document-ranking system.

## Scoring

A term's frequency (TF) counts how often the search term occurs in the document.
Document frequency counts how many documents with the term occur across the whole corpus (IDF being its inverse).
Together these factors work to score search relevance for matched text.

## Recall and Precision

![image](https://user-images.githubusercontent.com/48696735/212393718-8fe00213-1bb6-4f29-91fc-823cf46538c2.png)

The **recall** is the ratio of "the number of relevant products retrieved" to "the number of relevant products in the catalog".

**Precision** is the ratio of "the number of relevant products retrieved" to "the total number of products retrieved".

Essentially, high precision implies that an algorithm returned a higher number of relevant results, while high recall means that the model returned most of the relevant results.
For the search query `blue jeans`, if the catalog has 100 relevant products and the search retrieves 160 products out of which 80 are relevant, then recall is 80/100 = 0.8.
Precision in this scenario is 80/160 = 0.5.
Instead of Recall and Precision, most of the models in the Information Retrieval domain are measured by a harmonic mean of Recall and Precision, denoted by **F1 score**.
