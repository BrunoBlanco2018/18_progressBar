function ShowUI(time, text)
    UIActive = true
    SendNUIMessage({
        type = 'show',
        time = time,
        text = text,
    })
end

exports('ShowUI', ShowUI)