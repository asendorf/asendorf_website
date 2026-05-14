---
order: 1
institution: "University of Michigan"
image: "/images/umich.png"
imageAlt: "University of Michigan logo"
---

From 2010-2015, I attended the University of Michigan where I earned my M.S. and Ph.D. in statistical signal processing. My research focused on multi-modal data fusion, particularly high-dimensional sample-starved applications. I applied recent advances in random matrix theory to derive fundamental limits of classical algorithms and to propose improved versions of those algorithms. My advisor was [Prof. Raj Nadakuditi](https://web.eecs.umich.edu/~rajnrao/).

Here are a few select research projects from my time in graduate school. If you are interested in all of my papers, you can check them out in this github repo.

[All Papers](https://github.com/asendorf/papers)

## Thesis - Informative Data Fusion: Beyond Canonical Correlation Analysis

My thesis explores the the problem of detecting correlations from multi-modal data modeled by the ubiquitous signal-plus noise data model. I present a modification to CCA, called informative CCA (ICCA), that uses insights from random matrix theory to first project each dataset onto a low-dimensional informative signal subspace. I apply the ideas learned from ICCA to multiset CCA (MCCA), which analyzes correlations for more than two datasets.

[Paper Repo](https://github.com/asendorf/papers/tree/master/2015_thesis)
[Link to Paper](https://deepblue.lib.umich.edu/handle/2027.42/113419)

## Improved Detection of Correlated Signals in low-rank-plus-noise type datasets using Informative Canonical Correlation Analysis (ICCA)

We consider two matrix-valued datasets that are modeled as low-rank-correlated-signal-plus-Gaussian-noise. When empirical canonical correlation analysis (CCA) is used to infer these latent correlations, there is a broad regime where this inference will fail, which was classified by Bao and collaborators in the limit of high dimensionality and sample size. Motivated by random matrix theory insights, we propose an algorithm, which we label Informative CCA (ICCA), that infers the presence of latent correlations by considering the singular values of only the "informative" right singular vectors of each dataset. We establish fundamental detection limits for ICCA and show that it dramatically outperforms empirical CCA in broad regimes where empirical CCA provably fails.

[Paper Repo](https://github.com/asendorf/papers/tree/master/2015_ieee_tit)
[Link to Paper](https://ieeexplore.ieee.org/abstract/document/7903598)

## The Performance of a Matched Subspace Detector That Uses Subspaces Estimated From Finite, Noisy, Training Data

We analyze the performance of a matched subspace detector (MSD) where the test signal vector is assumed to reside in an unknown, low-rank subspace that must be estimated from finite, noisy, signal-bearing training data. Subspace estimation errors due to limited training data degrade the performance of the standard plug-in detector, relative to that of an oracle detector. To avoid some of this performance loss, we utilize and extend recent results from random matrix theory (RMT) that precisely quantify the quality of the subspace estimate as a function of the eigen-SNR, dimensionality of the system, and the number of training samples. We exploit this knowledge of the subspace estimation accuracy to derive from first-principles a new RMT detector and to characterize the associated ROC performance curves of the RMT and plug-in detectors.

[Paper Repo](https://github.com/asendorf/papers/tree/master/2013_ieee_tsp)
[Link to Paper](https://ieeexplore.ieee.org/abstract/document/6415288)
