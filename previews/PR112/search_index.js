var documenterSearchIndex = {"docs":
[{"location":"api/#TaylorModels.jl","page":"API","title":"TaylorModels.jl","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [TaylorModels]","category":"page"},{"location":"api/#TaylorModels.RTaylorModel1","page":"API","title":"TaylorModels.RTaylorModel1","text":"RTaylorModel1{T,S}\n\nRelative Taylor model in 1 variable, providing a rigurous polynomial approximation given by a Taylor polynomial pol (around x0) and a relative remainder rem for a function f(x) in one variable, valid in the interval dom. This corresponds to definition 2.3.2 of Mioara Joldes' thesis.\n\nFields:\n\npol: polynomial approximation, represented as TaylorSeries.Taylor1\nrem: the interval bound\nx0 : expansion point\ndom: domain, interval over which the Taylor model is defined / valid\n\nThe approximation f(x) = p(x) + delta (x - x_0)^n+1 is satisfied for all xin mathcalD; n is the order (degree) of the polynomial p(x)=sum_i=0^n p_i (x - x_0)^i.\n\n\n\n","category":"type"},{"location":"api/#TaylorModels.TaylorModel1","page":"API","title":"TaylorModels.TaylorModel1","text":"TaylorModel1{T,S}\n\nAbsolute Taylor model in 1 variable, providing a rigurous polynomial approximation given by a Taylor polynomial pol (around x0) and an absolute remainder rem for a function f(x) in one variable, valid in the interval dom. This corresponds to definition 2.1.3 of Mioara Joldes' thesis.\n\nFields:\n\npol: polynomial approximation, represented as TaylorSeries.Taylor1\nrem: the interval bound\nx0 : expansion point\ndom: domain, interval over which the Taylor model is defined / valid\n\nThe approximation f(x) = p(x) + Delta is satisfied for all xin mathcalD (0in Delta); n is the order (degree) of the polynomial p(x)=sum_i=0^n p_i (x - x_0)^i.\n\n\n\n","category":"type"},{"location":"api/#TaylorModels.TaylorModelN","page":"API","title":"TaylorModels.TaylorModelN","text":"TaylorModelN{N,T,S}\n\nTaylor Models with absolute remainder for N independent variables.\n\n\n\n\n\n","category":"type"},{"location":"api/#TaylorModels._picard-Tuple{Any, Any, Any}","page":"API","title":"TaylorModels._picard","text":"picard(dx, x0, box)\n\nComputes the picard (integral) operator for the initial condition x0. dx must be the rhs of the differential equation.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels._rpa","page":"API","title":"TaylorModels._rpa","text":"   _rpa(::Type{TaylorModel1}, f::Function, x0::Interval, I::Interval, _order::Integer)\n   _rpa(::Type{RTaylorModel1}, f::Function, x0::Interval, I::Interval, _order::Integer)\n\nRigurous polynomial approximation (RPA) with absolute/relative remainder for the function f on the interval I,  using a Taylor expansion around the interval x0 of order _order. The bound is computed by bound_remainder(@ref) exploiting monotonicity if possible, otherwise, it uses Lagrange bound.\n\n\n\n\n\n","category":"function"},{"location":"api/#TaylorModels._validate_step!-Tuple{Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Any, Bool, Any}","page":"API","title":"TaylorModels._validate_step!","text":"_validate_step(xTM1K, f!, dx, x0, params, t, box, dof; ε=1e-10, maxsteps=20, extrasteps=50)\n\nValidate the Taylor Model solution for the current integration time step. This function implements the epsilon inflation algorithm proposed by Bünger with some custom adaptations.\n\nRef: Florian B\"unger, A Taylor model toolbox for solving ODEs implemented in MATLAB/INTLAB, J. Comput. Appl. Math. 368, 112511, https://doi.org/10.1016/j.cam.2019.112511\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.absorb_remainder-Union{Tuple{TaylorModelN{N, T, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"API","title":"TaylorModels.absorb_remainder","text":"absorb_remainder(a::TaylorModelN)\n\nReturns a TaylorModelN, equivalent to a, such that the remainder is mostly absorbed in the constant and linear coefficients. The linear shift assumes that a is normalized to the IntervalBox(-1..1, Val(N)).\n\nRef: Xin Chen, Erika Abraham, and Sriram Sankaranarayanan, \"Taylor Model Flowpipe Construction for Non-linear Hybrid Systems\", in Real Time Systems Symposium (RTSS), pp. 183-192 (2012), IEEE Press.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.bound_integration-Union{Tuple{S}, Tuple{T}, Tuple{TaylorModel1{T, S}, Any}} where {T, S}","page":"API","title":"TaylorModels.bound_integration","text":"bound_integration(xTM1::TaylorModel1{Interval{S},S}, δt::Interval{S})\nbound_integration(xTM1::Vector{TaylorModel1{Interval{S},S}}, δt::Interval{S})\n\nRemainder bound for the integration of a series, given by δ * remainder(a) +  apolorder * δ^(order+1)  (order+1). This is tighter that the one used by Berz+Makino, which corresponds to Δ = aux * remainder(a) +  apolorder * aux^(order+1).\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.bound_remainder-Tuple{Type{RTaylorModel1}, Function, Taylor1, Taylor1, Any, Interval}","page":"API","title":"TaylorModels.bound_remainder","text":"bound_remainder(::Type{RTaylorModel1}, f::Function, polf::Taylor1, polfI::Taylor1, x0::Interval, I::Interval)\n\nBound the relative remainder of the polynomial approximation of f given by the Taylor polynomial polf around x0 on the interval I. It requires an the interval extension polfI of a polynomial that approximates f for the whole interval I, in order to compute the Lagrange remainder.\n\nIf polfI[end] has a definite sign, then it is monotonic in the interval I, which is exploited; otherwise, the last coefficients bounds the relative remainder. This corresponds to Prop 2.3.7 in Mioara Joldes' PhD thesis (pp 67).\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.bound_remainder-Tuple{Type{TaylorModel1}, Function, Taylor1, Taylor1, Any, Interval}","page":"API","title":"TaylorModels.bound_remainder","text":"bound_remainder(::Type{TaylorModel1}f::Function, polf::Taylor1, polfI::Taylor1, x0::Interval, I::Interval)\n\nBound the absolute remainder of the polynomial approximation of f given by the Taylor polynomial polf around x0 on the interval I. It requires the interval extension polfI of the polynomial that approximates f for the whole interval I, in order to compute the Lagrange remainder.\n\nIf polfI[end] has a definite sign, then it is monotonic in the intervals [I.lo, x0] and [x0.hi, I.hi], which is exploited; otherwise, it is used to compute the Lagrange remainder. This corresponds to Prop 2.2.1 in Mioara Joldes PhD thesis (pp 52).\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.bound_taylor1","page":"API","title":"TaylorModels.bound_taylor1","text":"bound_taylor1(fT::TaylorModel1, I=domain(fT)::Interval)\n\nCompute a tight polynomial bound for the Taylor model fT in the interval I, considering whether its derivative ftd has a definite sign.\n\n\n\n\n\n","category":"function"},{"location":"api/#TaylorModels.bound_taylor1-Tuple{Taylor1, Interval}","page":"API","title":"TaylorModels.bound_taylor1","text":"bound_taylor1(fT::Taylor1, I::Interval)\n\nCompute a tight polynomial bound for the Taylor polynomial fT in the interval I.\n\nNote: Algorithm 2.1.1 corresponds to evaluate(fT, I) or simply fT(I). This function uses the roots of the derivative offt` to obtain a tighter bound.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.bound_taylor1-Union{Tuple{T}, Tuple{Taylor1{T}, Taylor1{T}, Interval{T}}} where T","page":"API","title":"TaylorModels.bound_taylor1","text":"bound_taylor1(fT::Taylor1, fTd::Taylor1, I::Interval)\n\nCompute a tight polynomial bound for the Taylor polynomial fT in the interval I, considering whether its derivative ftd has a definite sign.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.fp_rpa","page":"API","title":"TaylorModels.fp_rpa","text":"fp_rpa(tm::TaylorModel1{Interval{T},T})\nfp_rpa(tm::RTaylorModel1{Interval{T},T})\n\nConvert a tm TaylorModel1 to a TaylorModel1 whose polynomial coefficients are Float64. The accumulated error is added to the remainder. The mid point of the expansion interval is preferentially rounded down if it is not an exactly representable value.\n\n\n\n\n\n","category":"function"},{"location":"api/#TaylorModels.initialize!-Union{Tuple{T}, Tuple{Array{TaylorModel1{TaylorN{T}, T}, 1}, Any, Any, Any, Any, Any, Any, Any, Any, Any}} where T","page":"API","title":"TaylorModels.initialize!","text":"initialize!(X0::Vector{TaylorModel1{TaylorN{T}, T}}, orderQ, orderT, x, dx, xTMN, xI, dxI, rem, xTM1v) where {T}\n\nInitialize the auxiliary integration variables assuming that the given vector of taylor models X0 is normalized to the domain [-1, 1]^n in space.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.initialize!-Union{Tuple{T}, Tuple{N}, Tuple{IntervalBox{N, T}, Any, Any, Any, Any, Any, Any, Any, Any, Any}} where {N, T}","page":"API","title":"TaylorModels.initialize!","text":"initialize!(X0::IntervalBox{N, T}, orderQ, orderT, x, dx, xTMN, xI, dxI, rem, xTM1v) where {N, T}\n\nInitialize the auxiliary integration variables and normalize the given interval box to the domain [-1, 1]^n.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.initialize!-Union{Tuple{T}, Tuple{N}, Tuple{IntervalBox{N, T}, Any, Any, Any, Any, Any, Any, Any}} where {N, T}","page":"API","title":"TaylorModels.initialize!","text":"initialize!(X0::IntervalBox{N, T}, orderQ, orderT, x, dx, xTMN, rem, xTM1v) where {N, T}\n\nInitialize the auxiliary integration variables and normalize the given interval box to the domain [-1, 1]^n.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.iscontractive-Union{Tuple{T}, Tuple{Interval{T}, Interval{T}}} where T","page":"API","title":"TaylorModels.iscontractive","text":"iscontractive(Δ, Δx)\n\nChecks if Δ .⊂ Δx is satisfied. If `Δ ⊆ Δx is satisfied, it returns true if all cases where == holds corresponds to the zero Interval.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.linear_dominated_bounder-Union{Tuple{TaylorModel1{T, S}}, Tuple{S}, Tuple{T}} where {T, S}","page":"API","title":"TaylorModels.linear_dominated_bounder","text":"linear_dominated_bounder(fT::TaylorModel1, ϵ=1e-3::Float64, max_iter=5::Int)\n\nCompute a tighter polynomial bound for the Taylor model fT by the linear dominated bounder algorithm. The linear dominated algorithm is applied until the bound of fT gets tighter than ϵ or the number of steps reachs max_iter. The returned bound corresponds to the improved polynomial bound with the remainder of the TaylorModel1 included.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.linear_dominated_bounder-Union{Tuple{TaylorModelN{N, T, S}}, Tuple{S}, Tuple{T}, Tuple{N}} where {N, T, S}","page":"API","title":"TaylorModels.linear_dominated_bounder","text":"linear_dominated_bounder(fT::TaylorModelN, ϵ=1e-3::Float64, max_iter=5::Int)\n\nCompute a tighter polynomial bound for the Taylor model fT by the linear dominated bounder algorithm. The linear dominated algorithm is applied until the bound of fT gets tighter than ϵ or the number of steps reachs max_iter. The returned bound corresponds to the improved polynomial bound with the remainder of the TaylorModelN included.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.picard_iteration-NTuple{7, Any}","page":"API","title":"TaylorModels.picard_iteration","text":"picard_iteration(f!, dx, xTM1K, params, t, x0, box)\n\nComputes the picard (integral) operator for the set of equations f! and the initial conditionx0. This method returns the remainder of the resulting Taylor Model without the remainder of the initial condition.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.picard_iteration-Tuple{Any, Any, Any, Any, Any, Any, Any, Val{true}}","page":"API","title":"TaylorModels.picard_iteration","text":"picard_iteration(f!, dx, xTM1K, params, t, x0, box, ::Val{true})\n\nComputes the picard (integral) operator for the set of equations f! and the initial conditionx0. The Val parameter enables the selection of the desired method. This one returns the remainder of the resulting Taylor Model with the remainder of the initial condition included.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.picard_remainder!-Union{Tuple{T}, Tuple{N}, Tuple{Function, Taylor1{T}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{Interval{T}}}, 1}, Array{Taylor1{TaylorN{Interval{T}}}, 1}, IntervalBox{N, T}, Interval{T}, IntervalBox{N, T}, IntervalBox{N, T}, Any}} where {N, T}","page":"API","title":"TaylorModels.picard_remainder!","text":"picard_remainder!(f!, t, x, dx, xxI, dxxI, δI, δt, Δx, Δ0, params)\n\nReturn the remainder of Picard operator\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.quadratic_fast_bounder-Tuple{TaylorModel1}","page":"API","title":"TaylorModels.quadratic_fast_bounder","text":"quadratic_fast_bounder(fT::TaylorModel1)\n\nCompute a tighter polynomial bound by the quadratic fast bounder. The returned bound corresponds to the \"improved\" polynomial bound with the remainder of the TaylorModel1 included. This \"improved\" bound can be one of the following two:     1) An improved bound: if the domain of fT has a local minimizer,        then an improved bound is returned.     2) Original TaylorModel bound: if the local minimizer criteria is not        satisfied, then the original bound of fT is returned.\n\nThis algorithm is a slight modification to the Makino & Berz algorithm. For this algorithm the linear part is bounded by solving a simple set of linear equations (compared to the iterative procedure by Makino & Berz).\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.quadratic_fast_bounder-Tuple{TaylorModelN}","page":"API","title":"TaylorModels.quadratic_fast_bounder","text":"quadratic_fast_bounder(fT::TaylorModelN)\n\nCompute a tighter polynomial bound by the quadratic fast bounder. The returned bound corresponds to the \"improved\" polynomial bound with the remainder of the TaylorModelN included. This \"improved\" bound can be one of the following two:     1) An improved bound: if the domain of fT has a local minimizer,        then an improved bound is returned.     2) Original TaylorModel bound: if the local minimizer criteria is not        satisfied, then the original bound of fT is returned.\n\nThis algorithm is a slight modification to the Makino & Berz algorithm. For this algorithm the linear part is bounded by solving a simple set of linear equations (compared to the iterative procedure by Makino & Berz).\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.remainder_taylorstep!-Union{Tuple{T}, Tuple{N}, Tuple{Function, Taylor1{T}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{Interval{T}}, 1}, Array{Taylor1{Interval{T}}, 1}, IntervalBox{N, T}, Interval{T}, Any}} where {N, T}","page":"API","title":"TaylorModels.remainder_taylorstep!","text":"remainder_taylorstep!(f!, t, x, dx, xI, dxI, δI, δt, params)\n\nReturns a remainder for the integration step for the dependent variables (x) checking that the solution satisfies the criteria for existence and uniqueness.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.rpa","page":"API","title":"TaylorModels.rpa","text":"rpa(g::Function, tmf::TaylorModel1)    rpa(g::Function, tmf::RTaylorModel1)    rpa(g::Function, tmf::TaylorModelN)\n\nRigurous polynomial approximation (RPA) for the function g using the Taylor Model with absolute/relative remainder tmf. The bound is computed exploiting monotonicity if possible, otherwise, it uses Lagrange bound.\n\n\n\n\n\n","category":"function"},{"location":"api/#TaylorModels.shrink_wrapping!-Union{Tuple{Array{TaylorModelN{N, T, T}, 1}}, Tuple{T}, Tuple{N}} where {N, T}","page":"API","title":"TaylorModels.shrink_wrapping!","text":"shrink_wrapping!(xTMN::TaylorModelN)\n\nReturns a modified inplace xTMN, which has absorbed the remainder by the modified shrink-wrapping method of Florian Bünger. The domain of xTMN is the normalized interval box [-1,1]^N.\n\nRef: Florian B\"unger, Shrink wrapping for Taylor models revisited, Numer Algor 78:1001–1017 (2018), https://doi.org/10.1007/s11075-017-0410-1\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.truncate_taylormodel-Tuple{RTaylorModel1, Integer}","page":"API","title":"TaylorModels.truncate_taylormodel","text":"truncate_taylormodel(a::RTaylorModel1, m::Integer)\n\nTruncates a::RTaylorModel1 to order m.\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorModels.validated_step!-Union{Tuple{T}, Tuple{N}, Tuple{Any, Taylor1{T}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{T}}, 1}, Taylor1{T}, Array{Taylor1{Interval{T}}, 1}, Array{Taylor1{Interval{T}}, 1}, Array{Taylor1{Interval{T}}, 1}, T, T, Int64, Array{TaylorModelN{N, T, T}, 1}, Array{IntervalBox{N, T}, 1}, Array{Interval{T}, 1}, IntervalBox{N, T}, IntervalBox{N, T}, Int64, Int64, T, Any, Bool, Bool, T, Bool}, Tuple{Any, Taylor1{T}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{T}}, 1}, Array{Taylor1{TaylorN{T}}, 1}, Taylor1{T}, Array{Taylor1{Interval{T}}, 1}, Array{Taylor1{Interval{T}}, 1}, Array{Taylor1{Interval{T}}, 1}, T, T, Int64, Array{TaylorModelN{N, T, T}, 1}, Array{IntervalBox{N, T}, 1}, Array{Interval{T}, 1}, IntervalBox{N, T}, IntervalBox{N, T}, Int64, Int64, T, Any, Bool, Bool, T, Bool, Function}} where {N, T}","page":"API","title":"TaylorModels.validated_step!","text":"validated-step!\n\n\n\n\n\n","category":"method"},{"location":"api/#TaylorSeries.integrate","page":"API","title":"TaylorSeries.integrate","text":"integrate(fT, which)\n\nIntegrates a TaylorModelN with respect to which variable. The returned TaylorModelN corresponds to the Taylor Model of the definite integral ∫f(x) - ∫f(expansion_point).\n\n\n\n\n\n","category":"function"},{"location":"api/#TaylorSeries.integrate-Union{Tuple{S}, Tuple{T}, Tuple{TaylorModel1{T, S}, T}} where {T, S}","page":"API","title":"TaylorSeries.integrate","text":"integrate(a, c0)\n\nIntegrates the one-variable Taylor Model (TaylorModel1 or RTaylorModel1) with respect to the independent variable; c0 is the interval representing the integration constant; if omitted it is considered as the zero interval.\n\n\n\n\n\n","category":"method"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"DocTestSetup = :(using TaylorModels)\nCurrentModule = TaylorModels","category":"page"},{"location":"range_bounding/#Taylor-model-variables-and-range-bounding","page":"Range bounding","title":"Taylor model variables and range bounding","text":"","category":"section"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Taylor models can be applied to the problem of range bounding, that is to find an interval I subseteq mathbbR such that f(x) in I on a given domain x in D (including possible floating point errors, see examples below). There are several ways to construct a Taylor model. A convenient way is to define a \"Taylor model variable\", which is then passed as argument to Julia functions. The following examples should help to clarify this method. To simplify the presentation we have only considered the univariate case, but this package can also handle multivariate Taylor models with the TaylorModelN type.","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Here we construct a Taylor model variable specifying that:","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"The truncation order is 3.\nThe expansion is around the origin (interval(0)).\nThe domain is the real interval centered around the origin -05 05.","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"using TaylorModels\n\nt = TaylorModel1(3, interval(0), -0.5..0.5)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Here the polynomial part is (the interval) 1, and the remainder is zero. We can pass this Taylor model variable to any Julia function, for example:","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"texp = exp(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"This expression is a polynomial of order 3 (in agreement with the truncation order specified in the construction of t), whose coefficients are intervals that are guaranteed to contain the exact coefficient of the Taylor expansion of the function t mapsto e^t in D  -05 05 subset mathbbR. Similarly, we can expand trigonometric functions such as t mapsto sin(t):","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"tsin = sin(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Common arithmetic operators, such as addition (+) and multiplication (*) work with Taylor model variables out-of-the-box:","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"s = texp + tsin","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"p = texp * tsin","category":"page"},{"location":"range_bounding/#One-dimensional-bounding","page":"Range bounding","title":"One-dimensional bounding","text":"","category":"section"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"To bound the range of a Taylor model in one variable, use the function bound_taylor1:","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"using TaylorModels: bound_taylor1\n\n[bound_taylor1(x) for x in [s, p]]","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"This shows in particular that 012499 leq e^t + sin(t) leq 212501 and that -0291667 leq e^t sin(t) leq 0791667 for all t in D. Such bounds are in general not tight.","category":"page"},{"location":"range_bounding/#Mincing","page":"Range bounding","title":"Mincing","text":"","category":"section"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"If desired, the common approach to improve the bounds is to evaluate the Taylor model on a smaller interval, e.g.","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"D = domain(s) # domain -0.5 .. 0.5\n\nE = evaluate(s, D) # original, no mincing","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Dm = mince(D, 8) # split the domain into 8 smaller chunks\n\nEm = evaluate.(s, Dm) # evaluate the Taylor model on each sub-domain\n\nRm = reduce(hull, Em) # take the convex hull, i.e. the smallest interval that contains them all","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Here the lower bound has been improved by mincing (or splitting) the domain, and it may improve by repeating such operation recursively on smaller domains. In particular, the fact that the lower bound is greater than zero constitutes an algorithmic proof that s  t mapsto e^t + sin(t) is positive on D. Let's visualize the function s(t) and the bounds obtained so far.","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"using Plots\n\nDt = range(-0.5, 0.5, length=100)\n\nfig = plot(xlab=\"t\", ylab=\"s(t)\", legend=:topleft)\nplot!(fig, Dt, t -> exp(t) + sin(t), lab=\"\", c=:black)\n\n# range bounds\nplot!(fig, Dt, t -> sup(E), lab=\"N = 1\", c=:blue, style=:dash)\nplot!(fig, Dt, t -> inf(E), c=:blue, lab=\"\", style=:dash)\n\nplot!(fig, Dt, t -> sup(Rm), lab=\"N = 8\", c=:red, style=:dash)\nplot!(fig, Dt, t -> inf(Rm), c=:red, lab=\"\", style=:dash)\n\nR16 = reduce(hull, evaluate.(s, mince(D, 16)))\nplot!(fig, Dt, t -> sup(R16), lab=\"N = 16\", c=:orange, style=:dash)\nplot!(fig, Dt, t -> inf(R16), c=:orange, lab=\"\", style=:dash)","category":"page"},{"location":"range_bounding/#Internal-representation","page":"Range bounding","title":"Internal representation","text":"","category":"section"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Consider again the Taylor model variable from the Taylor model variables and range bounding example.","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"t","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Such constructor is an alias for","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"    TaylorModel1(x0 + Taylor1(eltype(x0), ord), zero(dom), interval(x0), dom)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Taylor models in one variable are internally represented using four fields: a Taylor series (pol) in one variable that holds the polynomial approximation of order ord; the interval remainder (rem); the expansion point (x0), and the interval domain of interest (dom). Getter functions are defined for each of these fields:","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"get_order(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"remainder(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"polynomial(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"domain(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"expansion_point(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Finally, note that the Taylor model type has two parameters, T and S. The first parameter, T, refers to the numeric type of the coefficients of the polynomial, in this case an interval with double precision floating point values (Interval{Float64}). The second parameter, S, refers to the numeric type of the interval that holds the remainder, expansion point and domain of interest (in this case Float64).","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"typeof(t)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"If we had defined the expansion point using 0.0 instead of interval(0), the coefficients of (the polynomial part of) this Taylor model variable would be floats instead of intervals.","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"z = TaylorModel1(3, 0.0, -0.5..0.5)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"typeof(z)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"polynomial(z)","category":"page"},{"location":"range_bounding/","page":"Range bounding","title":"Range bounding","text":"Using a polynomial with interval coefficients guarantees that all arithmetic operations involving t are conservative, or rigorous, with respect to floating point arithmetic.","category":"page"},{"location":"#TaylorModels.jl","page":"Home","title":"TaylorModels.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package combines the IntervalArithmetic.jl and TaylorSeries.jl packages to provide Taylor models, i.e. Taylor polynomials with guaranteed error bounds to approximate functions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"An introduction is available in this video from JuliaCon 2018.","category":"page"},{"location":"#Introduction-to-Taylor-Models","page":"Home","title":"Introduction to Taylor Models","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Taylor models provide a way to rigorously manipulate and evaluate functions using floating-point arithmetic. They have been widely used for validated computing: in global optimization and range bounding, for validated solutions of ODEs, rigorous quadrature, etc.","category":"page"},{"location":"","page":"Home","title":"Home","text":"A Taylor model (TM) of order n for a function f which is supposed to be n + 1 times continuously differentiable over an interval ab, is a rigorous polynomial approximation of f. Specifically, it is a couple (P Delta) formed by a polynomial P of degree n, and an interval part Delta, such that f(x)  P(x) in Delta, forall x  ab. Roughly speaking, as their name suggests, the polynomial can be seen as a Taylor expansion of the function at a given point. The interval Delta (also called interval remainder) provides the validation of the approximation, meaning that it provides an enclosure of all the approximation errors encountered (truncation, roundings).","category":"page"},{"location":"","page":"Home","title":"Home","text":"Here we generate TMs of order 6 and 7 over I = -0510. We can view a TM as a a tube around the actual function.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TaylorModels\n\nf(x) = x*(x-1.1)*(x+2)*(x+2.2)*(x+2.5)*(x+3)*sin(1.7*x+0.5)\na =  -0.5 .. 1.0 # Domain\nx0 = mid(a)     # Expansion point\ntm6 = TaylorModel1(6, interval(x0), a) # Independent variable for Taylor models, order 6\ntm7 = TaylorModel1(7, interval(x0), a)  # Independent variable for Taylor models, order 7\n# Taylor models corresponding to f(x) of order 6 and 7\nftm6 = f(tm6)\nftm7 = f(tm7)\n\n# Now the plot\nusing Plots; gr()\nplot(range(inf(a), stop=sup(a), length=1000), x->f(x), label=\"f(x)\", lw=2, xaxis=\"x\", yaxis=\"f(x)\")\nplot!(ftm6, label=\"6th order\")\nplot!(ftm7, label=\"7th order\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: intro_plot)","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Luis Benet, Instituto de Ciencias Físicas, Universidad Nacional Autónoma de México (UNAM)\nDavid P. Sanders, Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)","category":"page"},{"location":"#Bibliography","page":"Home","title":"Bibliography","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Rigorous Polynomial Approximations and Applications, Mioara Maria Joldes, Ecole normale supérieure de lyon - ENS LYON (2011)","category":"page"},{"location":"#Acknowledgements","page":"Home","title":"Acknowledgements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Financial support is acknowledged from DGAPA-UNAM PAPIIT grants IN-117117, IG-100616 and IG-100819. DPS acknowledges support through a Cátedra Marcos Moshinsky (2018).","category":"page"}]
}
