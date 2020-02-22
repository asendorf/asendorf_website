import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import umich from '../files/umich.png'
import umd from '../files/umd.png'


export const Grad = () => (
        <div className="container">
        <Jumbotron>
        <center><h1> Academic Work</h1></center>
            <div class="card my-3">
              <div class="row no-gutters">
                <div class="col-md-2">
                  <div class="card my-3 border-0">
                      <img src={umich} class="img-fluid" alt="Profile"/>
                  </div>
                </div>
               <div class="col-md-10">
                 <div class="card-body">

        <p class="card-text">From 2010-2015, I attended the University of
        Michigan where I earned my M.S. and Ph.D. in statistical signal
        processing. My research focused on multi-modal data fusion, particularly
        high-dimensional sample-starved applications. I applied recent advances
        in random matrix theory to derive fundamental limits of classical
        algorithms and to propose improved versions of those algorithms. My
        advisor was <a href="https://web.eecs.umich.edu/~rajnrao/"
        target="_blank" rel="noopener noreferrer">Prof. Raj Nadakuditi</a>.</p>
        <p>Here are a few select research projects from my time in graduate
        school. If you are interested in all of my papers, you can check them
        out in this github repo.</p> <center><a class="btn  btn-social
        btn-github" href="https://github.com/asendorf/papers" target="_blank"
        rel="noopener noreferrer"> <span class="fa fa-github"></span>All
        Papers</a></center> <div class="card-body"> <hr></hr> <h5
        class="card-title">Thesis - Informative Data Fusion: Beyond Canonical
        Correlation Analysis</h5> <p>My thesis explores the the problem of
        detecting correlations from multi-modal data modeled by the ubiquitous
        signal-plus noise data model. I present a modification to CCA, called
        informative CCA (ICCA), that uses insights from random matrix theory to
        first project each dataset onto a low-dimensional informative signal
        subspace. I apply the ideas learned from ICCA to multiset CCA (MCCA),
        which analyzes correlations for more than two datasets.</p> <a
        class="btn  btn-social btn-github mr-1"
        href="https://github.com/asendorf/papers/tree/master/2015_thesis"
        target="_blank" rel="noopener noreferrer"> <span class="fa
        fa-github"></span>Paper Repo</a> <a class="btn btn-outline-dark"
        href="https://deepblue.lib.umich.edu/handle/2027.42/113419"
        target="_blank" rel="noopener noreferrer">Link to Paper</a> </div>

        <div class="card-body">
        <hr></hr>
        <h5 class="card-title">Improved Detection of Correlated Signals in low-rank-plus-noise type datasets using Informative Canonical Correlation Analysis (ICCA)</h5>
        <p>We consider two matrix-valued datasets that are modeled as low-rank-correlated-signal-plus-Gaussian-noise. When empirical canonical correlation analysis (CCA) is used to infer these latent correlations, there is a broad regime where this inference will fail, which was classified by Bao and collaborators in the limit of high dimensionality and sample size. Motivated by random matrix theory insights, we propose an algorithm, which we label Informative CCA (ICCA), that infers the presence of latent correlations by considering the singular values of only the "informative" right singular vectors of each dataset. We establish fundamental detection limits for ICCA and show that it dramatically outperforms empirical CCA in broad regimes where empirical CCA provably fails.</p>
        <a class="btn  btn-social btn-github mr-1" href="https://github.com/asendorf/papers/tree/master/2015_ieee_tit" target="_blank" rel="noopener noreferrer">
        <span class="fa fa-github"></span>Paper Repo</a>
        <a class="btn btn-outline-dark" href="https://ieeexplore.ieee.org/abstract/document/7903598" target="_blank" rel="noopener noreferrer">Link to Paper</a>
        </div>

    <div class="card-body">
        <hr></hr>
        <h5 class="card-title">The Performance of a Matched Subspace Detector That Uses Subspaces Estimated From Finite, Noisy, Training Data</h5>
        <p>We analyze the performance of a matched subspace detector (MSD) where the test signal vector is assumed to reside in an unknown, low-rank subspace that must be estimated from finite, noisy, signal-bearing training data. Subspace estimation errors due to limited training data degrade the performance of the standard plug-in detector, relative to that of an oracle detector. To avoid some of this performance loss, we utilize and extend recent results from random matrix theory (RMT) that precisely quantify the quality of the subspace estimate as a function of the eigen-SNR, dimensionality of the system, and the number of training samples. We exploit this knowledge of the subspace estimation accuracy to derive from first-principles a new RMT detector and to characterize the associated ROC performance curves of the RMT and plug-in detectors.</p>
        <a class="btn  btn-social btn-github mr-1" href="https://github.com/asendorf/papers/tree/master/2013_ieee_tsp" target="_blank" rel="noopener noreferrer">
        <span class="fa fa-github"></span>Paper Repo</a>
        <a class="btn btn-outline-dark" href="https://ieeexplore.ieee.org/abstract/document/6415288" target="_blank" rel="noopener noreferrer">Link to Paper</a>
        </div>
                </div>
              </div>
            </div>
          </div>

        <div class="card my-3">
            <div class="row no-gutters">
              <div class="col-md-2">
                <div class="card my-3 border-0">
                    <img src={umd} class="img-fluid" alt="Profile"/>
                </div>
              </div>
              <div class="col-md-10">
                <div class="card-body">
        <p class="card-text">From 2006-2010, I attended the University of Maryland where I earned my B.S. in computer engineering with a minor in mathematics. I participated in a number of undergraduate reserach opportunites that convinced my past self to go to graduate school.</p>

        <div class="card-body">
        <hr></hr>
        <h5 class="card-title">Of Mice and Men: An Ergonomic and Market Assessment of Current Computer Mice</h5>
        <p>While at Maryland, I participated in a multidisciplinary four-year research program. Our team evaluated the ergonomic performance of various computer mice using a motion capture system, EMG analysis, and force sensors. </p>
        <a class="btn btn-outline-dark" href="https://drum.lib.umd.edu/handle/1903/10089" target="_blank" rel="noopener noreferrer">Link to Paper</a>
        </div>

            <div class="card-body">
        <hr></hr>
        <h5 class="card-title">The Neural Representation of Auditory Modulations Relevant to Speech</h5>
        <p>During the summer of 2009, I worked with Prof. Jonathan Simon to measure neural responses to low-frequency amplitude modulated signals using magnetoencephalography.</p>
        <a class="btn btn-outline-dark" href="https://pdfs.semanticscholar.org/a290/f928d19932f8f93d00f16b3f3fc37d78282b.pdf" target="_blank" rel="noopener noreferrer">Link to Paper</a>
        </div>

        </div>
           </div>
        </div>
        </div>
        </Jumbotron>
</div>

)
