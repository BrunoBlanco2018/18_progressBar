function ShowUI(time, text)
    UIActive = true
    SendNUIMessage({
        type = 'show',
        time = time,
        text = text,
    })
end

--time = 10 // 1 seconds

exports('ShowUI', ShowUI)