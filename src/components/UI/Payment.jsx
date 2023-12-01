export default function Payment () {
    return (
        <div className="rounded-md">
        <section>
          <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Forma de pagamento</h2>
          <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-2">Card</span>
              <input name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required />
            </label>
          </fieldset>
        </section>
      </div>
    )
}