#=
Modified from:
https://github.com/dpsanders/TaylorModels.jl/blob/master/src/TaylorModels.jl
=#

using RecipesBase

@recipe function g(f::TaylorModel1)
    fT, Δ, ξ0 = rpafp(f)

    alpha --> 0.3
    seriestype := :shape

    xs = linspace(f.iI.lo, f.iI.hi, 100)
    evals = fT.(xs .- ξ0)

    xs = [xs; reverse(xs); xs[1]]
    ys = [evals .+ inf(Δ); reverse(evals .+ sup(Δ)); evals[1]+inf(Δ)]

    xs, ys
end

@recipe function g(f::RTaylorModel1)
    fT, Δ, ξ0, δ = rpafp(f)
    order = get_order(f)+1

    alpha --> 0.5
    seriestype := :shape

    xs = linspace(f.iI.lo, f.iI.hi, 100)
    evals = fT.(xs .- ξ0)
    corrs = (xs .- ξ0) .^ order
    Δrel = δ .+ Δ .* corrs
    evalslo = evals .+ inf.( Δrel )
    evalshi = evals .+ sup.( Δrel )

    xs = [xs; reverse(xs); xs[1]]
    ys = [evalslo; reverse(evalshi); evalslo[1]]

    xs, ys
end